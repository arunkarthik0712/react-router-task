# React Router Task

This project is a React application using Vite for development, React Router for navigation, and Bootstrap for styling. The application displays different blogs based on the selected category, with active navigation links highlighted.

## Features

- Navigation bar with links to different categories.
- Display blogs with images.
- Highlight active navigation link with a bottom border.
- Responsive design using Bootstrap.

## Demo

Check out the live demo of the project [here](https://arunkarthik0710-react-router-task.netlify.app/).

---

## Folder Structure

```
react-router-task/
├── node_modules/
├── public/
│   └── react.svg
├── src/
│   ├── components/
|   |   └── Navbar.jsx
│   ├── data/
|   |   └── blogs.js
│   ├── pages/
│   │   ├── AllBlogs.jsx
│   │   ├── Career.jsx
│   │   ├── CyberSecurity.jsx
│   │   ├── Datascience.jsx
|   |   └── Fullstack.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/arunkarthik0712/react-router-task.git
```

2. Navigate to the project directory:

```bash
cd react-todo
```

3. Install the dependencies:

```bash
npm install
```

---

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and go to `http://localhost:5173` to see the application.

---

## Deployment

The project is deployed on Netlify. To deploy your own copy, follow these steps:

1. **Build the project:**
   ```sh
   npm run build
   ```
2. **Deploy the `dist` folder to Netlify.**

---

## Acknowledgements

- [React](https://reactjs.org) for the JavaScript library.
- [Vite](https://vitejs.dev) for the build tool.
- [Netlify](https://app.netlify.com)For providing the platform to deploy the application.

---
