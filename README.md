OpenBlog is open source template is design and built with nextjs, tailwind CSS and Markdown. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure
```bash
rajdeepsingh@officialrajdeepsingh:~/frontendweb3/openblog$ tree -I node_modules
.
├── components
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── Newsletter.tsx
│   ├── Pagination.tsx
│   ├── Search.tsx
│   └── useFuse.ts
├── data
│   └── posts.ts
├── next.config.js
├── next-env.d.ts
├── package.json
├── pages
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── authors
│   ├── _document.tsx
│   ├── index.tsx
│   ├── read
│   │   └── [slug].tsx
│   └── tags
│       └── [slug].tsx
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── android.jpg
│   │   ├── blog-2.jpg
│   │   ├── camera.jpg
│   │   ├── computer.jpg
│   │   ├── health.jpg
│   │   ├── ios.jpg
│   │   ├── photographer.jpg
│   │   ├── smartphone.jpg
│   │   ├── software-developer.jpg
│   │   ├── technology.jpg
│   │   └── vegetables.jpg
│   ├── moon.jpg
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── README.md
├── styles
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── type.d.ts

9 directories, 41 files
```
