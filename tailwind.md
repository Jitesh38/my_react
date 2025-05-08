1. installing Tailwind
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

2. tailwind.config.js
```bash
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
```

3. index.css
```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```