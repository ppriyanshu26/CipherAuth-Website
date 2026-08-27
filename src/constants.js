import appIcon from "./assets/images/appicon.png";
import microsoftStoreIcon from "./assets/images/store.png";
import googlePlayIcon from "./assets/images/play.png";
import githubIcon from "./assets/images/github.png";
import headerImage from "./assets/images/header.png";
import storesImage from "./assets/images/GOGLMSFT.png";
import localImage from "./assets/images/local.png";
import bioImage from "./assets/images/hello.png";
import localSyncVideo from "./assets/videos/localSync.mp4";
import exportVideo from "./assets/videos/exportImport.mp4";
import recycleBinImage from "./assets/images/recycleBin.png";
import viewqrVideo from "./assets/videos/viewqr.mp4";
import lightThemeImage from "./assets/images/light.png";
import autofillImage from './assets/images/autofill.png';
import cardImage from './assets/images/card.png';
import passphraseImage from './assets/images/passphrase.png';

export const ROUTES = {
  home: "/",
  features: "/features",
  updates: "/updates",
};

export const BRAND = {
  name: "CipherAuth",
  taglinePrimary: "Your Credentials, Your Device.",
  taglineSecondary: "Privacy meets Convenience",
  appIcon,
};

export const OVERVIEW = {
  heading: "Overview",
  body:
    "CipherAuth is a secure, offline-first, cross-platform password manager application designed for simplicity, security, and privacy. Built with Flutter, it provides an encrypted vault to store both your 2FA authentication tokens and passwords across Android and Windows.",
  headerImage,
};

export const WHY = {
  heading: "Why CipherAuth?",
  items: [
    {
      heading: "Cybersecurity Simplified",
      body: "Most people think of cybersecurity as hacking, viruses, and breach notifications. At its core, it's simpler than that — protecting your digital assets from unauthorized access. \n\nThe best way to do that beyond a strong password is MFA, and authenticator apps are the gold standard. No SMS server to intercept, no OTP traveling over the air. Just a time-based code generated locally on your device — no network required.\n\n",
    },
    {
      heading: "The Problem with Authenticator Apps",
      body: "Cloud-synced vaults are encrypted, yes — but with keys the provider controls. The architecture allows access, even if the company never intends to use it. For something this critical, 'trust us' isn't good enough. \n\nThere’s also a practical limitation that rarely gets discussed: most widely trusted, free authenticator apps are built primarily for mobile devices. Desktop support is often limited and inconsistent. \n\nOn top of that, many popular authenticator apps — even reputable ones — include analytics frameworks. These can collect metadata about how the app is used: frequency, device information, interaction patterns, and sometimes more, depending on permissions and implementation.\n\n",
    },
    {
      heading: "The Solution: Local-first Authenticator",
      body: "There is a saying 'the more you delve into privacy, the more you loose convenience'. Frustrated at everything, I built my own — CipherAuth.\n\nCipherAuth sits at the intersection of privacy and convenience — one where privacy is the default rather than a compromise. The one deliberate friction point is the master password: it is stored nowhere, and if forgotten, there is no recovery. That is a conscious design decision. Beyond that, the app is built to stay out of the user's way.",
    },
  ],
};

export const PHILOSOPHY = {
  heading: "Philosophy Behind CipherAuth",
  body:
    "CipherAuth is built on a simple idea: the things that protect your identity should belong to you. \n\nThe goal was an app I'd actually want to use myself. One where privacy isn't a compromise you make — it's just how it works. \n\nWhat started in July 2025, born out of frustration, motivated by making a project that truly stannds out, now fulfills that vision. Started in Python due to its versatility, and me being the most comfortable with it, the earlier version catered to mostly desktop based operating systems. But with the flow of time, moree features got added, and I couldnt handle the complexity. \n\nAn idea to also build one for my mobile drove me to migrate my codebase to Flutter, as that would help me to build a modern, responsive and secure app, catering for multiple platforms with a single codebase and consistent user experience. \n\nThe code is source-available on GitHub — not because it's a portfolio piece, but because security software you can't audit is security software you shouldn't trust. \n\nCipherAuth is not a tool that makes privacy painful. The only friction is the master password having no recovery — framed as intentional, not a limitation, because its you who is responsible for your security.",
};

export const COMPARISON_TABLE = {
  heading: "CipherAuth vs Most Existing Apps",
  columns: ["Feature", "CipherAuth", "Most Existing Apps"],
  rows: [
    ["Local-only storage", "Yes", "No (cloud sync common)"],
    ["AES-GCM encryption", "Yes", "Varies"],
    ["No cloud keys", "Yes", "No (provider holds keys)"],
    ["Desktop (Windows) support", "Yes", "Rare"],
    ["Biometric unlock", "Yes", "Varies"],
    ["LAN sync without cloud", "Yes", "No"],
    ["QR code re-export", "Yes", "No"],
    ["Encrypted portable backup", "Yes", "Rare"],
    ["Recycle Bin with 30-day restore", "Yes", "No"],
    ["Source-available", "Yes", "Varies"],
  ],
};

export const FEATURES = {
  heading: "Features",
  emptyState: "No features yet.",
  carouselCount: 3,
  carouselIntervalMs: 5000,
  items: [
    {
      name: "Local-first Storage",
      details: "Your secrets stay on your device by default.",
    },
    {
      name: "Encrypted Vault",
      details: "All your credentials are encrypted with AES-GCM.",
    },
    {
      name: "Passphrase Generator",
      details: "Switch to passphrases, easy to remeber, harder to crack.",
    },
    {
      name: "Autofill",
      details: "Autofill your login credentials directly on apps and browsers.",
    },
    {
      name: "Cross-platform",
      details: "Works across Android and Windows with a consistent experience.",
    },
    {
      name: "Biometric Unlock",
      details: "Supports Windows Hello and Biometrics to unlock the app.",
    },
    {
      name: "Local Sync",
      details: "Sync your credentials securely to another device.",
    },
    {
      name: "Export/Import",
      details: "Easily backup and restore your credentials using an encrypted file.",
    },
    {
      name: "Recycle Bin",
      details: "Deleted credentials are retained for 30 days, allowing you to restore them if needed.",
    },
    {
      name: "QR Code Support",
      details: "View and scan QR codes using other apps for easy setup.",
    },
    {
      name: "Modern UI",
      details: "Clean, intuitive light/dark interface built with Flutter.",
    },
    {
      name: "Password Cards",
      details: "Long press a credential to view its details.",
    },
  ],
  itemsDetailed: [
    {
      name: "Local-first Storage",
      details: "Privacy isnt just an option you can turn on — it's how the app works. With no cloud sync by default, your secrets stay on your device. You control your data, not a third party.",
      media: {
        type: "image",
        src: localImage,
        alt: "Data stored locally on device with no cloud sync",
      },
    },
    {
      name: "Encrypted Vault",
      details: "All your data stays on your device by default. The password hash and the biometric data never leave your device, and the data is decrypted only during runtime and written nowhere.",
      media: {
        type: "link",
        href: "https://cipher-ppriyanshu.vercel.app/",
        badge: "AES-GCM Encryption",
        label: "Click to view the encryption algorithm",
      },
    },
    {
      name: "Passphrase Generator",
      details: "Passphrases are sequences of random words (e.g., 'correct-bell-pepper-salt') instead of traditional passwords. Because of their length, they are highly secure and extremely difficult for computers to brute-force, yet much easier to remember and type.",
      media: {
        type: "image",
        src: passphraseImage,
        alt: "Say Hello To Passphrases",
      },
    },
    {
      name: "Autofill",
      details: "CipherAuth integrates with the operating system itself, which tells the app the url of the website, and CipherAuth securely fills the credentials directly in the input fields.",
      media: {
        type: "image",
        src: autofillImage,
        alt: "Autofill Passwords",
      },
    },
    {
      name: "Cross-platform",
      details: "Built using Flutter for a consistent experience across Android and Windows devices. Collaborations and suggestions are welcome to expand to more platforms in the future.",
      media: {
        type: "image",
        src: storesImage,
        alt: "CipherAuth on Google Play Store and Microsoft Store",
      },
    },
    {
      name: "Biometric Unlock",
      details: "Supports Windows Hello on compatible Windows devices and Biometrics on compatible Android devices to unlock the app.",
      media: {
        type: "image",
        src: bioImage,
        alt: "Biometric Unlock",
      },
    },
    {
      name: "Local Sync",
      details: "You can securely sync your credentials to another device over your local network, with the accounts being transmitted in encrypted manner and hence can only be read by devices with the same password.",
      media: {
        type: "video",
        src: localSyncVideo,
        alt: "Local Sync",
        label: "Tap to view the mechanism",
      },
    },
    {
      name: "Export/Import",
      details: "Not just a .csv file, your backup is encrypted and password-protected, and the exported file can only be decrypted with the same password, ensuring your data remains always protected.",
      media: {
        type: "video",
        src: exportVideo,
        alt: "Export and Import using csv",
        label: "Tap to view the mechanism",
      },
    },
    {
      name: "Recycle Bin",
      details: "Authenticator apps often lack a safety net for accidental deletions. With CipherAuth's Recycle Bin, deleted credentials are retained for 30 days, allowing you to restore them if needed.",
      media: {
        type: "image",
        src: recycleBinImage,
        alt: "Recycle Bin with 30-day restore",
      },
    },
    {
      name: "QR Code Support",
      details: "This is especially useful when you want to add your account to another device by scanning the QR with it, or if you want to use a third-party app to scan the QR and extract the secret key.",
      media: {
        type: "video",
        src: viewqrVideo,
        alt: "View QR code and scan with another device",
        label: "Tap to view the mechanism",
      },
    },
    {
      name: "Modern UI",
      details: "The app is designed with a clean, intuitive interface that supports both light and dark themes. It provides a seamless and responsive user experience across all supported platforms.",
      media: {
        type: "image",
        src: lightThemeImage,
        alt: "Light theme UI",
      },
    },
    {
      name: "Password Cards",
      details: "Long pressing a password reveals its fields, its creation and update date and its credential id, a unique hash value from which it is identified in sync.",
      media: {
        type: "image",
        src: cardImage,
        alt: "Password Details",
      },
    },
  ],
};

export const DOWNLOADS = {
  heading: "Downloads",
  items: [
    {
      label: "Microsoft Store",
      href: "https://apps.microsoft.com/detail/9NS2R9NTRF2Z",
      icon: microsoftStoreIcon,
    },
    {
      label: "Google Play Store",
      href: "https://play.google.com/store/apps/details?id=in.ppriyanshu.cipherauth",
      icon: googlePlayIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/ppriyanshu26/CipherAuth-Flutter",
      icon: githubIcon,
    },
  ],
};

export const DEVELOPER = {
  heading: "About the Developer",
  name: "Priyanshu Priyam",
  title: "Software Engineer",
  body:
    "A Software Engineer with hands-on experience in building Android applications, creating and testing APIs, and working with relational database systems. I focus on delivering reliable, user-friendly, and performance-optimized applications through my projects and academic work. \n\nFor suggestions or feedback, feel free to reach out through any of the platforms below.",
  links: [
    {
      label: "Portfolio",
      href: "https://ppriyanshu.vercel.app/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ppriyanshu26",
    },
    {
      label: "Mail",
      href: "mailto:cipherauth@proton.me",
    },
    {
      label: "GitHub",
      href: "https://github.com/ppriyanshu26",
    },
    {
      label: "Telegram",
      href: "https://t.me/ppika26",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ppriyanshu26_",
    },
  ],
};

export const UPDATES = {
  heading: "Latest Updates",
  emptyState: "No updates yet.",
  previewCount: 3,
  viewAllLabel: "View complete logs",
  backLabel: "Back",
  items: [
    {
      date: "26th August, 2026",
      title: "One Year of CipherAuth",
      description: [
        "200th GitHub commit. A year of shipping and improving a privacy focused cross platform password manager, currently supporting Windows and Android ecosystems.",
      ],
      link: "https://play.google.com/store/apps/details?id=in.ppriyanshu.cipherauth",
    },
    {
      date: "26th August, 2026",
      title: "v8.1.1",
      description: [
        "Contact details updated to ProtonMail for privacy.",
        "Sync shows device details.",
        "Website URL changed.",
        "Updated the register password screen to emphasize more on passphrases.",
        "Minor UI fixes and UX improvements.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v8.1.1",
    },
    {
      date: "1st August, 2026",
      title: "v8.1.0",
      description: [
        "Dedicated FAQs tab so it is easier to find and resolve some common queries.",
        "Dedicated Changelog tab so users can now see the changes in each version for transparency.",
        "Password details are equipped with their authenticator codes.",
        "Users can make a new login entry for the specific app opened.",
        "Various bug fixes.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v8.1.0",
    },
    {
      date: "10th June, 2026",
      title: "v8.0.0",
      description: [
        "CipherAuth now has a dedicated tab for managing your passwords.",
        "Password hash is completely removed from the device storage, and authentication happens by decrypting the vault with the password entered.",
        "Local Sync is now faster without sharing the password hash over the network.",
        "Autofill your login credentials directly on apps and browsers. Currently supported in Android only.",
        "Say goodbye to passwords, say hello to passphrases. Easy to remember, harder to crack.",
        "Import and export of backup files is now more smooth.",
        "Long press a credential to view its details.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v8.0.0",
    },
    {
      date: "4th May, 2026",
      title: "Google Play Store Release",
      description: [
        "CipherAuth is now available on the Google Play Store for Android users, providing a seamless installation and update experience directly through the official channel.",
      ],
      link: "https://play.google.com/store/apps/details?id=in.ppriyanshu.cipherauth",
    },
    {
      date: "4th May, 2026",
      title: "v7.4.4",
      description: [
        "About screen updated with Google Play Store and Microsoft Store links.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.4.4",
    },
    {
      date: "4th May, 2026",
      title: "v7.4.3",
      description: [
        "Users get a disclaimer on the create password screen to always remember their password as there as no back doors.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.4.3",
    },
    {
      date: "4th May, 2026",
      title: "v7.4.2",
      description: [
        "On adding account, first character in every word of the platform name is capitalized.",
        "Platform name is further truncated on mobile devices for clean UI.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.4.2",
    },
    {
      date: "1st May, 2026",
      title: "v7.4.1",
      description: [
        "Snackbar now comes with an undo button to quickly restore an accidentally deleted credential.",
        "Adding an account by scanning a QR is made more modern by a square layout and toggle button for flashlight.",
        "Android now handles files with same names more reliably, than appending numbers at last.",
        "The URLs in QR codes now handles encoding for special characters, and extracting the username by itself if not mentioned explicitly.",
        "Added icons on empty screens.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.4.1",
    },
    {
      date: "22nd April, 2026",
      title: "v7.3.2",
      description: [
        "Deleted credentials now move to Recycle Bin instead of being removed immediately, with a 30-day retention window for recovery.",
        "Users can restore entries from Recycle Bin or permanently delete them when they want immediate cleanup.",
        "Added clear notes about deletion behavior, including that permanent delete is device-local and a later sync can re-add a credential as a fresh entry if another device still has it.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.3.2",
    },
    {
      date: "3rd April, 2026",
      title: "v7.2.2",
      description: [
        "CipherAuth now deals additional icon support on the home screen UI.",
        "Added notes to let users know of the key details they should take care of.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.2.2",
    },
    {
      date: "30th March, 2026",
      title: "v7.2.1",
      description: [
        "Scan any compatible QR with the native mobile camera app, and get directed to CipherAuth to add your account.",
        "Accidental touch outside the password input popup during import creds now returns a toast.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.2.1",
    },
    {
      date: "26th March, 2026",
      title: "v7.1.0",
      description: [
        "The .csv file saved as backup to device is now encrypted and needs a password to decrypt it on import.",
        "Users can only use their password to view the QR to boost security.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.1.0",
    },
    {
      date: "25th March, 2026",
      title: "v7.0.0",
      description: [
        "All files access permission that was blocking Play Store upload.",
        "Users can choose where to save (including Downloads) instead of the app writing directly to restricted storage.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v7.0.0",
    },
    {
      date: "23rd March, 2026",
      title: "v6.5.5",
      description: [
        "A clear uniform policy for redistribution and transparency.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.5.5",
    },
    {
      date: "17th March, 2026",
      title: "v6.5.4",
      description: [
        "Light Theme Correction and Snackbar to let users know secret key is copied.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.5.4",
    },
    {
      date: "26th February, 2026",
      title: "v6.5.3",
      description: [
        "Snackbars now are of minimal color scheme.",
        "Screenshots are blocked and password is asked on resume in android application.",
        "Sync feature now handles deleted credentials and considers the created timestamp to add them back.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.5.3",
    },
    {
      date: "23rd February, 2026",
      title: "v6.5.2",
      description: [
        "Sync now helps keep track of deleted accounts to provide consistent sharing of the same set of credentials across multiple devices.",
        "Users are shown a statement regarding the potential risks of viewing QRs and are prompted to use sync for encrypted sharing.",
        "Adjusted spacings between containers and consistent logic across similar screens.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.5.2",
    },
    {
      date: "23rd February, 2026",
      title: "v6.3.2",
      description: [
        "Enhanced UI/UX for better navigation and organization.",
        "Users can now easily import their credentials into the app.",
        "Consistent design language throughout the application.",
        "Users receive the biometric authentication prompt automatically upon launching the app",
        "Account listings now display icons for quick visual identification.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.3.2",
    },
    {
      date: "17th February, 2026",
      title: "v6.1.2",
      description: [
        "Added ability to browse and import QR images directly from device storage.",
        "New dedicated about screen with app information.",
        "Added support screen with contact and feedback options.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.1.2",
    },
    {
      date: "15th February, 2026",
      title: "v6.0.0",
      description: [
        "A secure, cross-platform, local TOTP authenticator for simplicity and security.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.0.0",
    },
    {
      date: "15th February, 2026",
      title: "v6.0.0",
      description: [
        "A secure, cross-platform, local TOTP authenticator for simplicity and security.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Flutter/releases/tag/v6.0.0",
    },
    {
      date: "4th February, 2026",
      title: "v5.0.0.0",
      description: [
        "Replaced .ico format with .png for universal compatibility across Windows, macOS, and Linux.",
        "Fixed icon file path handling for both development and compiled executable environments.",
        "Added application icon overlay in the center of generated QR codes.",
        "Fixed PyInstaller path resolution to properly locate icon file in bundled app using sys._MEIPASS",
        "PyInstaller now correctly handles cross-platform deployment without code changes.",
        "Icon integration works seamlessly in both development (python app/main.py) and production (compiled EXE/Microsoft Store)",
        "QR code generation automatically uses bundled icon when app is packaged",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v5.0.0.0",
    },
    {
      date: "25th January, 2026",
      title: "v4.0.1.0",
      description: [
        "Added an eye button to toggle between hidden and visible states for sensitive secrets.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v4.0.1.0",
    },
    {
      date: "19th January, 2026",
      title: "v4.0.0.0",
      description: [
        "Better keyboard navigation with Enter/Escape support.",
        "Tap to reveal/blur QR codes; displayed blurred by default for enhanced security.",
        "Removed keyring dependency",
        "Added reusable utility functions for text truncation",
        "Enhanced toast notification styling",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v4.0.0.0",
    },
    {
      date: "12th January, 2026",
      title: "Microsoft Store Release",
      description: [
        "CipherAuth is now available on the Microsoft Store for Windows users, providing a seamless installation and update experience directly through the official channel.",
      ],
      link: "https://apps.microsoft.com/detail/9NS2R9NTRF2Z",
    },
    {
      date: "11th January, 2026",
      title: "v3.0.0.0",
      description: [
        "Upgraded data encryption to use AES-GCM for better integrity and security of your stored tokens.",
        "Refined search bar interactions and smoother transitions between screens.",
        "Improved blurring and revealing logic for QR codes to protect against shoulder-surfing.",
        "Optimized the .spec file for PyInstaller to ensure stable builds across platforms without source modifications.",
        "A more robust password reset handler that securely re-encrypts all local data.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v3.0.0.0",
    },
    {
      date: "3rd September, 2025",
      title: "v2.0.0",
      description: [
        "Introduced a separate application for QR extraction, text encryption, and management of the encoded.txt file.",
        "The Authenticator now leverages the system credentials manager for enhanced security and robustness.",
        "Both applications can now be executed from any directory, without generating extra or redundant data.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v2.0.0",
    },
    {
      date: "27th August, 2025",
      title: "v1.1.0",
      description: [
        "Ensured only one popup opens at a time.",
        "Ensured popups open inside the app.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v1.1.0",
    },
    {
      date: "26th August, 2025",
      title: "v1.0.0",
      description: [
        "Minimal & user-friendly interface.",
        "Offline OTP generation.",
        "Secure and portable.",
      ],
      link: "https://github.com/ppriyanshu26/CipherAuth-Python/releases/tag/v1.0.0",
    },
  ],
};

export const STORY_TIME = {
  heading: "Story Time",
  blogs: [
    {
      title: "My Home Keys",
      excerpt: "Leaving my home with a lock always keeps me assured. The key is with me, and no one can enter without my knowing. But what if the key gets lost, or what if someone finds a way to pick the lock?\n\nTo make things safer, I thought of hiring a security guard at my doorstep. I gave him a secret phrase that only I know of, which changes every minute based on the time. Now, I feel a lot more relaxed. Even if someone steals my physical key and tries to open the lock, they cannot get past the guard without knowing the secret phrase. It acts as a solid security measure.\n\nBut there is one major issue that always bugs me. The guard has no memory of who I am. Every single time I want to enter my own house, he stands in my way and demands the new code. He does not care if he saw me just five minutes ago. I am constantly tired of answering his questions just to get into my own home.\n\nIt makes me realize that absolute privacy often comes at the cost of convenience.",
    },
    {
      title: "The Cool Guy",
      excerpt: "Just yesterday, I came across a guy while entering my neighborhood. He popped up from nowhere, looking like a helpful neighbor. He asked me in a very friendly voice why I bother carrying all these heavy keys around.\n\nHe explained that almost everyone in the area trusts him with their keys. He keeps them in a giant locker that only he can open. If I join them, I will never have to worry about securing my keys again. Whenever I want to enter a house, I just ask him, and he opens the door for me. It sounds like an amazing deal since everyone else is already doing it.\n\nTo make it even better, he seems to know all the shopkeepers and home owners around. Whenever I try to enter a new place, if he is there to say he knows me, the owner lets me in right away without asking any questions. It is incredibly easy and feels like magic.\n\nThis wonderful convenience definitely has a scary trade-off with my privacy.",
    },
    {
      title: "Digital Identity",
      excerpt: "Handing over your home keys to a stranger, just because everyone does so feels weird. But now think of your home as your social media account and the key as your password.\n\nThese password managers do the exact same thing. Yeah your details are encrypted, but mostly they hold the key. A true encryption shouldn't have any backdoors, its YOUR DATA - YOUR RESPONSIBILITY. \n\nYeah this password management is crazy, but think of using 'authenticate using KNOWN TECH GIANT', what happens in this case is not you being verified, but that provider telling the client site that, 'I know this person, let him in'. \n\nThe day you are locked out of your account, the day that tech giant can't remember you, you lose your data. Its the right time to take hold of your DIGITAL IDENTITY, and keep cloud expose of persoanl data to minimum. The eveolution to AI has even started to bring out the vulnerabilities in many sites that were secured from decades.",
    },
  ],
};

