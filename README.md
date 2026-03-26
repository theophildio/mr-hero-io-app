# AppDock - App Installation Manager

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.9-green?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://hero-io-theophil-dio.netlify.app)

---

## Description

**AppDock** is a modern web application to explore, install, and manage apps from a curated list. Users can:

- Browse all available apps with details like downloads, ratings, size, and reviews.
- Search apps live with case-insensitive filtering.
- Install apps, which are saved locally using **localStorage**.
- Uninstall apps with a single click.
- Sort apps by download count or size.
- Experience global loaders and search-specific loaders for smooth UX.
- Handle “App Not Found” scenarios gracefully.

The app features a responsive navigation bar, footer, and fully functional routing using **React Router v6+**.

---

## Features

- Live search with real-time filtering
- Installation management with **localStorage**
- Sort apps by download count or size
- Global loader for page transitions
- Search loader while filtering apps
- Responsive navbar with active route highlighting
- Toast notifications for install/uninstall actions
- Graceful handling of empty results

---

## Technologies Used

- **React.js** - Frontend UI library
- **React Router v6** - Routing & data loaders
- **React Hot Toast** - Notifications
- **Axios** - Fetching app data
- **Tailwind CSS** - Responsive styling
- **LocalStorage** - Persisting installed apps locally
- **Vite** - Fast build tool and dev server

---

## Folder Structure

src/
├─ assets/
│ ├─ logo.png
│ └─ github.png
├─ components/
│ ├─ Navbar.jsx
│ ├─ Footer.jsx
│ └─ Products.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ AllApps.jsx
│ └─ Installation.jsx
├─ utilities/
│ └─ addToDB.js
├─ Routes/
│ └─ Routes.jsx
└─ index.jsx

---

## Open in your browser:

[Live Demo](https://app-dock-theophil-dio.netlify.app/)

---

## Author

Theophil Dio
