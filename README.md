# Interior Design Website

This is an interior design website built with Tailwind CSS, JavaScript, and Vite.

## Description

This website provides a platform for users to explore and find inspiration for interior design website. It's minimalistic design gives a fresh look to your client.

## Features

- Browse a variety of interior design styles
- Get tips and advice on home decoration
- Explore resources for home improvement projects

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repo
   ```bash
   git clone https://github.com/your_username_/Project-Name.git

   # 1. Install Vite:
npm init @vitejs/app my-vite-app --template vanilla

# Navigate into the new project folder:
cd my-vite-app

# 2. Install Tailwind CSS via npm:
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Create a new configuration file for Tailwind CSS:
npx tailwindcss init -p

# This will create a `tailwind.config.js` and `postcss.config.js` file at the root of your project.

# Open the `tailwind.config.js` file and replace the contents with the following:
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

# Open the `index.css` file and inject Tailwind's styles into it:
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

# Finally, you can start your Vite app by running:
npm run dev

