# Getting Your Site on GitHub Pages

Here is a general procedure for getting your project hosted on GitHub pages so you can show your hard work to your loved ones.

## Preparation

1. Checkout your `main` branch and double-check to make sure it is up-to-date and there is nothing needed to be committed at this point
1. Navigate to the root of your project directory
1. Open your project in your text editor
1. Double-check that all image tags in your HTML have the `src` attribute have `./` to start the path, e.g `src="./images/turing-logo.png"`

## Required Steps

1. In the `package.json` file, within the `"repository"` object, edit the `"url"` value to be `"git+https://github.com/USERNAME/REPONAME.git"` where USERNAME and REPONAME are replaced with your GitHub username and your repository name, respectively
1. In the `package.json` file, add the line: `"homepage": "http://USERNAME.github.io/REPONAME",` where USERNAME and REPONAME are replaced with your GitHub username and your repository name, respectively
1. Add these two lines to the `scripts` section of the `package.json` file:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```
1. In the terminal, run `npm install --save-dev gh-pages`
1. You should see these lines of JSON added to your `package.json` file:
  ```json
  "devDependencies": {
  "gh-pages": "^1.1.0"
  }
  ```
1. Run `npm run build` in the command line
1. Run `npm run deploy` in the command line

All of this will create a `gh-pages` branch in your repo with the contents from the `build` directory.

If you go to the GitHub pages site (http://USERNAME.github.io/REPONAME) in a minute, you should see your app! If not, check out the console to see what errors you're getting and troubleshoot from there.

## When You Make New Changes

If you make new changes to your `main` branch, GitHub Pages doesn't automatically know about these changes, and your site won't be up-to-date. You need to update the `gh-pages` branch to see those changes live on GitHub Pages. Here is how to update and keep everything in sync:

1. After you're done making changes, checkout your `main` branch and double-check to make sure it is up-to-date and there is nothing needed to be committed at this point
1. Run `npm run build` in the command line
1. Run `npm run deploy` in the command line
