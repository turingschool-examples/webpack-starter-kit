# Webpack Starter Kit

## Fork + Clone This Repo

1. Fork this repo.
2. Clone AND RENAME this repo with `git clone [remote-address] [what you want to name the repo]`. For example: 
```bash
git clone git@github.com:turingschool-examples/webpack-starter-kit.git overlook-hotel
```
3. `cd` into your new directory.
4. Install the library dependencies with `npm install`.
5. To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Where to Add Your Code

### JavaScript

You have to be very intentional with where you add your feature code. This repo uses a tool called [webpack](https://webpack.js.org/) to combine many JavaScript files into one big file. Webpack enables you to have many, separate JavaScript files to keep your code organized and readable. Webpack expects all of your code files to be in a specific place, or else it doesn't know how to combine them all behind the scenes.

**Create all of your feature code files in the `src` directory.**

Since code is separated into multiple files, you need to use the `import` and `export` syntax to share code across file.

Here is a video that walks through some information about [import and export](https://www.youtube.com/watch?v=_3oSWwapPKQ). There are a lot of resources out there about `import` and `export`, and resources will sometimes call them `ES6 modules`. It's something you will see in React and beyond.

### HTML

Add the HTML you need in the `index.html` file in the `./dist` directory. There is some boilerplate HTML that exists from the start that you can modify.

### Images

Add your image files in the `src/images` directory. Similar to CSS files, you need to `import` image files in the JavaScript entry file (`scripts.js`). Then go into the HTML and add an `img` element with the `src` attribute pointing to the `images` directory. There is an example in the `index.html` file for you to see.

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory.

## Webpack?

If you look in the `package.json` file, you'll see one of the library dependencies called `webpack`. If you're interested in learning more about what Webpack is and how it works behind the scenes, take a look through the [Webpack configuration documentation](https://webpack.js.org/concepts/).

## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.

---
## Installing Typescript (*Extension Only*)
1. Install `typescript` and `ts-loader`:
```
npm i -D typescript ts-loader
```

2. Create a `tsconfig.json` file in the root directory
```
touch tsconfig.json
```

3. Add the following to the `tsconfig.json` file:
```js
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

4. In your webpack.config.js file, update it to be:
```js
const path = require('path');
module.exports = {
  "mode": "none",
  "entry": "./src/scripts.ts",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  "devtool": "source-map",
  // CSS and file (image) loaders
  "module": {
    "rules": [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
```

5. Update all `.js` files to be `.ts` including `scripts.ts`.

6. From here, you should now get some TypeScript errors when running `npm start` that you can begin working through.