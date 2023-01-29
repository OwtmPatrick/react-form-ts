# JSON Form builder

Simple form builder based on [JSON Schema](https://json-schema.org)

Support only few primitives:

<ul>
  <li>string</li>
  <li>enum</li>
  <li>integer</li>
  <li>boolean</li>
</ul>

## Start

1. Clone [repo](https://github.com/OwtmPatrick/react-form-ts)
2. Install packages

```
npm install
```

3. Start dev server

Please make sure you have 16.x or later Node.js version

```
npm run dev
```

## Build

Run following command to build your source:

```
npm run build
```

And go to <code>dist</code> folder

## Static code analyze

You can run eslint for static code analyzing:

### ESLint

```
npm run lint
```

also you can use <code>--fix</code> flag for autofixing if it is possible:

```
npm run lint:fix
```

### GhPages

Deployed with [gh-pages](https://pages.github.com), available [here](https://owtmpatrick.github.io/react-form-ts)
