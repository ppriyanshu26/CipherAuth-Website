import { useEffect, useState } from "react";
import "./App.css";
import {
  BRAND,
  COMPARISON_TABLE,
  DEVELOPER,
  DOWNLOADS,
  FEATURES,
  OVERVIEW,
  PHILOSOPHY,
  ROUTES,
  STORY_TIME,
  UPDATES,
  WHY,
} from "./constants";

function getPathRoute() {
  const path = window.location.pathname || "/";
  if (path === ROUTES.features) return "features";
  if (path === ROUTES.updates) return "updates";
  return "home";
}

function navigate(to) {
  const currentState = window.history.state ?? {};
  window.history.replaceState(
    {
      ...currentState,
      scrollY: window.scrollY,
    },
    "",
    window.location.pathname || "/",
  );

  window.history.pushState({ scrollY: 0 }, "", to);
  window.dispatchEvent(
    new PopStateEvent("popstate", {
      state: window.history.state,
    }),
  );
}

function isInternalLink(href) {
  return typeof href === "string" && href.startsWith("/");
}

function Link({ href, className, children }) {
  const onClick = (event) => {
    const isModified =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

    if (event.button !== 0 || isModified) return;
    if (!isInternalLink(href)) return;

    event.preventDefault();
    navigate(href);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function FeatureCarousel() {
  const items = FEATURES.items;
  const count = FEATURES.carouselCount;
  const intervalMs = FEATURES.carouselIntervalMs;
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [count, items.length]);

  useEffect(() => {
    const pageCount = Math.ceil(items.length / count);
    if (pageCount <= 1) return;

    const id = window.setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [items.length, count, intervalMs, page]);

  if (items.length === 0) {
    return <p className="emptyState">{FEATURES.emptyState}</p>;
  }

  const visibleCount = Math.min(count, items.length);
  const pageCount = Math.max(1, Math.ceil(items.length / count));
  const startIndex = (page * count) % items.length;
  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const featureIndex = (startIndex + i) % items.length;
    return items[featureIndex];
  });

  return (
    <div className="featureCarouselWrap" aria-label="Feature carousel">
      <div className="featureCarousel">
        {visible.map((feature) => (
          <FeatureCard key={feature.name} feature={feature} />
        ))}
      </div>

      <div className="featureCarouselFooter">
        <Link className="viewAllLink itemLink" href={ROUTES.features}>
          Learn about the features in detail
        </Link>

        {pageCount > 1 ? (
          <div className="carouselDots" role="tablist" aria-label="Feature slides">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`carouselDot ${i === page ? "isActive" : ""}`}
                aria-label={`Show features slide ${i + 1} of ${pageCount}`}
                aria-current={i === page}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MediaModal({ media, isOpen, onClose }) {
  if (!isOpen || !media) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="mediaModal" onClick={handleBackdropClick}>
      <div className="mediaModalContent">
        <button
          type="button"
          className="mediaModalClose"
          onClick={onClose}
          aria-label="Close media viewer"
        >
          ✕
        </button>
        {media.type === "image" && (
          <img
            src={media.src}
            alt={media.alt ?? ""}
            className="mediaModalImage"
          />
        )}
        {media.type === "video" && media.src && (
          <video
            src={media.src}
            controls
            className="mediaModalVideo"
            autoPlay
          />
        )}
      </div>
    </div>
  );
}

function FeatureMedia({ media, onMediaClick }) {
  if (!media) return null;

  if (media.type === "image") {
    return (
      <button
        type="button"
        className="featureMedia featureMediaImage featureMediaButton"
        onClick={() => onMediaClick(media)}
        aria-label={`View ${media.alt ?? "image"}`}
      >
        <img
          src={media.src}
          alt={media.alt ?? ""}
          loading="lazy"
        />
        {media.label && <span className="featureMediaBadge">{media.label}</span>}
      </button>
    );
  }

  if (media.type === "video") {
    if (media.src) {
      return (
        <button
          type="button"
          className="featureMedia featureMediaLink featureMediaVideo featureMediaButton"
          onClick={() => onMediaClick(media)}
          aria-label={`Play ${media.alt ?? "video"}`}
        >
          <img src={BRAND.appIcon} alt="App icon" className="videoMediaIcon" />
          {media.label && <span className="featureMediaBadge">{media.label}</span>}
        </button>
      );
    }

    if (media.href) {
      return (
        <a
          className="featureMedia featureMediaLink featureMediaVideo"
          href={media.href}
          target="_blank"
          rel="noreferrer"
        >
          {media.label && <span className="featureMediaBadge">{media.label}</span>}
        </a>
      );
    }

    return (
      <div className="featureMedia featureMediaVideo">
        {media.label && <span className="featureMediaBadge">{media.label}</span>}
      </div>
    );
  }

  if (media.type === "link") {
    return (
      <a
        className="featureMedia featureMediaLink"
        href={media.href}
        target="_blank"
        rel="noreferrer"
      >
        <img src={BRAND.appIcon} alt="App icon" className="linkMediaIcon" />
        {media.badge && <span className="featureMediaBadge">{media.badge}</span>}
        <span className="featureMediaText">{media.label ?? "Open link"}</span>
      </a>
    );
  }

  return null;
}

function FeatureCard({ feature, onMediaClick }) {
  const hasMedia = Boolean(feature?.media);

  return (
    <article className={`featureCard ${hasMedia ? "" : "featureCardNoMedia"}`.trim()}>
      <div className="featureCardContent">
        <p className="featureCardTitle">{feature.name}</p>
        <p className="featureCardBody">{feature.details}</p>
      </div>
      <FeatureMedia media={feature.media} onMediaClick={onMediaClick} />
    </article>
  );
}

function FeaturesList({ features, emptyState, onMediaClick }) {
  if (features.length === 0) {
    return <p className="emptyState">{emptyState}</p>;
  }

  return (
    <ul className="featureList">
      {features.map((feature) => (
        <li key={feature.name} className="featureItem">
          <FeatureCard feature={feature} onMediaClick={onMediaClick} />
        </li>
      ))}
    </ul>
  );
}

function FeaturesPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const onBack = () => {
    const currentState = window.history.state ?? {};
    window.history.replaceState(
      {
        ...currentState,
        scrollY: window.scrollY,
      },
      "",
      window.location.pathname || "/",
    );

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    navigate(ROUTES.home);
  };

  return (
    <>
      <MediaModal
        media={selectedMedia}
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
      <section className="pageSection" aria-label={FEATURES.heading}>
        <div className="pageHeader">
          <button type="button" className="textButton" onClick={onBack}>
            Back
          </button>
          <h2 className="sectionTitle">{FEATURES.heading}</h2>
        </div>

        <div className="panel">
          <FeaturesList
            features={FEATURES.itemsDetailed}
            emptyState={FEATURES.emptyState}
            onMediaClick={setSelectedMedia}
          />
        </div>
      </section>
    </>
  );
}

function UpdatesList({ updates, emptyState }) {
  if (updates.length === 0) {
    return <p className="emptyState">{emptyState}</p>;
  }

  return (
    <ul className="updateList">
      {updates.map((update) => (
        <li key={`${update.date}-${update.title}`} className="updateItem">
          <p className="itemMeta">{update.date}</p>
          {update.link ? (
            isInternalLink(update.link) ? (
              <Link className="itemTitle itemLink" href={update.link}>
                {update.title}
              </Link>
            ) : (
              <a
                className="itemTitle itemLink"
                href={update.link}
                target="_blank"
                rel="noreferrer"
              >
                {update.title}
              </a>
            )
          ) : (
            <p className="itemTitle">{update.title}</p>
          )}
          {Array.isArray(update.description) ? (
            <ul className="itemBodyList">
              {update.description.map((line) => (
                <li key={line} className="itemBodyListItem">
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="itemBody">{update.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

function UpdatesPage() {
  const onBack = () => {
    const currentState = window.history.state ?? {};
    window.history.replaceState(
      {
        ...currentState,
        scrollY: window.scrollY,
      },
      "",
      window.location.pathname || "/",
    );

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    navigate(ROUTES.home);
  };

  return (
    <section className="pageSection" aria-label={UPDATES.heading}>
      <div className="pageHeader">
        <button
          type="button"
          className="textButton"
          onClick={onBack}
        >
          {UPDATES.backLabel}
        </button>
        <h2 className="sectionTitle">{UPDATES.heading}</h2>
      </div>

      <div className="panel">
        <UpdatesList updates={UPDATES.items} emptyState={UPDATES.emptyState} />
      </div>
    </section>
  );
}

function App() {
  const [route, setRoute] = useState(getPathRoute);

  useEffect(() => {
    document.title = BRAND.name;
  }, []);

  useEffect(() => {
    window.history.replaceState(
      {
        ...(window.history.state ?? {}),
        scrollY: window.scrollY,
      },
      "",
      window.location.pathname || "/",
    );

    const initialRoute = getPathRoute();

    if (initialRoute === "updates" || initialRoute === "features") {
      window.history.replaceState(
        {
          ...(window.history.state ?? {}),
          scrollY: 0,
        },
        "",
        window.location.pathname || "/",
      );
      window.scrollTo(0, 0);
    }

    const onPopState = (event) => {
      setRoute(getPathRoute());
      const scrollY = event.state?.scrollY ?? 0;
      window.requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const latestUpdates = UPDATES.items.slice(0, UPDATES.previewCount);
  const philosophyParagraphs = PHILOSOPHY.body.split(/\n\s*\n/);
  const philosophyAccentStart = Math.max(0, philosophyParagraphs.length - 2);

  if (route === "updates") {
    return (
      <main className="page">
        <UpdatesPage />
      </main>
    );
  }

  if (route === "features") {
    return (
      <main className="page">
        <FeaturesPage />
      </main>
    );
  }

  return (
    <main className="page">
      <header className="hero">
        <div className="brand">
          <img
            className="appIcon"
            src={BRAND.appIcon}
            alt={`${BRAND.name} app icon`}
            width="96"
            height="96"
          />

          <div className="brandText">
            <h1 className="title">{BRAND.name}</h1>

            <div className="taglines" aria-label="Taglines">
              <p className="taglinePrimary">{BRAND.taglinePrimary}</p>
              <p className="taglineSecondary">{BRAND.taglineSecondary}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="overview" aria-label={OVERVIEW.heading}>
        <div className="overviewGrid">
          <div className="overviewText">
            <h2 className="sectionTitle">{OVERVIEW.heading}</h2>
            <p className="overviewBody">{OVERVIEW.body}</p>
          </div>

          <img
            className="headerImage"
            src={OVERVIEW.headerImage}
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <section className="featuresShowcase" aria-label={FEATURES.heading}>
        <h2 className="sectionTitle">{FEATURES.heading}</h2>
        <FeatureCarousel />
      </section>

      <section className="storyTimeSection" aria-label={STORY_TIME.heading}>
        <div className="storyTimePanel">
          <h2 className="sectionTitle">{STORY_TIME.heading}</h2>
          <div className="storyTimeGrid">
            {STORY_TIME.blogs.map((blog, index) => (
              <article className="storyCard" key={index}>
                <h3 className="storyTitle">{blog.title}</h3>
                <p className="storyExcerpt">{blog.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="info" aria-label="Features and latest updates">
        <div className="infoGrid">
          <div className="panel" aria-label={WHY.heading}>
            <h2 className="sectionTitle">{WHY.heading}</h2>

            <div className="whatWhy">
              {WHY.items.map((item, index) => (
                <div className="whatWhyBlock" key={`${item.heading}-${index}`}>
                  <p className="whatWhyTitle">{item.heading}</p>
                  <p className="whatWhyBody">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="infoColumn" aria-label="Latest updates and downloads">
            <div className="panel updatesPanel" aria-label={UPDATES.heading}>
              <h2 className="sectionTitle">{UPDATES.heading}</h2>

              <UpdatesList updates={latestUpdates} emptyState={UPDATES.emptyState} />

              {UPDATES.items.length > UPDATES.previewCount ? (
                <Link className="viewAllLink itemLink" href={ROUTES.updates}>
                  {UPDATES.viewAllLabel}
                </Link>
              ) : null}
            </div>

            <div className="downloadsSection" aria-label={DOWNLOADS.heading}>
              <h2 className="sectionTitle">{DOWNLOADS.heading}</h2>

              <div className="downloadsButtons" role="list">
                {DOWNLOADS.items.map((item) => {
                  const isDisabled = !item.href;
                  const Tag = isDisabled ? "span" : "a";

                  return (
                    <Tag
                      key={item.label}
                      className={`downloadButton ${isDisabled ? "isDisabled" : ""}`}
                      href={isDisabled ? undefined : item.href}
                      target={isDisabled ? undefined : "_blank"}
                      rel={isDisabled ? undefined : "noreferrer"}
                      role="listitem"
                      aria-disabled={isDisabled}
                      tabIndex={isDisabled ? -1 : 0}
                    >
                      <img
                        className="downloadIcon"
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <span className="downloadLabel">{item.label}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compareSection" aria-label={PHILOSOPHY.heading}>
        <div className="comparePanel">
          <div className="compareCopy">
            <h2 className="sectionTitle">{PHILOSOPHY.heading}</h2>
            <p className="compareBody">
              {philosophyParagraphs.map((paragraph, index) => {
                const isAccent = index >= philosophyAccentStart;
                const needsBreak = index < philosophyParagraphs.length - 1;
                return (
                  <span
                    key={`${PHILOSOPHY.heading}-${index}`}
                    className={isAccent ? "philosophyAccent" : undefined}
                  >
                    {paragraph}
                    {needsBreak ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                  </span>
                );
              })}
            </p>
          </div>

          <div className="comparisonTableWrap" aria-label={COMPARISON_TABLE.heading}>
            <table className="comparisonTable">
              <caption className="srOnly">{COMPARISON_TABLE.heading}</caption>
              <thead>
                <tr>
                  {COMPARISON_TABLE.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        data-label={COMPARISON_TABLE.columns[index]}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="developerSection" aria-label={DEVELOPER.heading}>
        <div className="panel" aria-label={DEVELOPER.heading}>
          <h2 className="sectionTitle">{DEVELOPER.heading}</h2>

          <p className="developerName itemTitle">{DEVELOPER.name}</p>
          <p className="developerRole itemMeta">{DEVELOPER.title}</p>
          <p className="developerBody">{DEVELOPER.body}</p>

          <div className="developerLinks" aria-label="Developer links">
            {DEVELOPER.links.map((link) => {
              const isDisabled = !link.href;
              const Tag = isDisabled ? "span" : "a";

              return (
                <Tag
                  key={link.label}
                  className={`developerLink itemLink ${isDisabled ? "isDisabled" : ""}`}
                  href={isDisabled ? undefined : link.href}
                  target={isDisabled ? undefined : "_blank"}
                  rel={isDisabled ? undefined : "noreferrer"}
                  aria-disabled={isDisabled}
                  tabIndex={isDisabled ? -1 : 0}
                >
                  {link.label}
                </Tag>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
