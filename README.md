# Fla Flor Climatização - Landing Page

This project is a front end of a landing page for the company Fla Flor Climatização. It's a modern, responsive single-page application designed to showcase the company's services and provide easy contact options for customers.

## ✨ Features

- **Responsive Design:** Adapts to all screen sizes, from mobile to desktop.
- **Smooth Animations:** Built with Framer Motion for a fluid user experience.
- **Direct WhatsApp Contact:** Call-to-action buttons that open a pre-filled WhatsApp chat.
- **Component-Based Architecture:** Clean and maintainable code structure using React components.

## 🚀 Tech Stack

- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)** - A fast front-end build tool.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework.
- **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React.
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built using Radix UI and Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** - Simply beautiful & consistent icons.

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) (v18 or newer recommended) and a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/silvadouglasFull/flaflorClimatizacao
    ```
2.  Navigate to the project directory:
    ```sh
    cd flaflorClimatizacao
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Development Server

To start the development server, run the following command:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) with your browser to see the result.

### Building for Production

To create a production-ready build of the application, run:

```sh
npm run build
```

or

```sh
yarn build
```

This will create a `dist` folder in the project root with the optimized static assets.

## 📂 Project Structure

The main source code is located in the `src` directory.

```
src
├── assets/         # Images and other static assets
├── components/     # Reusable React components
│   ├── ui/         # UI components from shadcn/ui
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── ...
└── App.jsx         # Main application component
```

- **`src/components`**: Contains all the individual components that make up the landing page, such as `Header`, `Hero`, `Services`, `Contact`, and `Footer`.
- **`src/App.jsx`**: The root component that assembles all the other components to form the complete page.
