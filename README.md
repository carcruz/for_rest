# For rest

This project was design and originally develop during the Visualizing Complexity Science Workshop 2023 by Alenka Gučem, Johanna Giesecke, William Schueller and Carlos Cruz

## UI Required stack

- [NodeJS >= v14](https://nodejs.org/en/)

## Install dependencies

```
cd ./web
npm install
```

## Running development

To run UI dev enviroment from the web directory run:

```
npm run dev
```

## Building production-ready bundle

From the web directory run: `npm run build`. This will generate a production-ready bundle.

### Notes

Currently, two official Vite plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
