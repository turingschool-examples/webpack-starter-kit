# Getting Your Site on GitHub Pages

Here is a general procedure for getting your project hosted on GitHub pages so you can show your hard work to your loved ones.

## Preparation

1. Checkout your `main` branch and double-check to make sure it is up-to-date and there is nothing needed to be committed at this point
1. Navigate to the root of your project directory
1. Open your project in your text editor
1. Double-check that all image tags in your HTML have the `src` attribute have `./` to start the path, e.g `src="./images/turing-logo.png"`

## Required Steps
1. Go to your GitHub Repo and click `Settings` > `Pages`
2. Select "Deploy from branch" from the `main` branch and click `Save`. Note that after this step, your deployed site will be showing the README. This is expected. In order to get your actual app to show up, the following steps are necessary.
3. In the `package.json` file, within the `"repository"` object, add the lines:
```json
  "type": "git",
  "url": "git+https://github.com/USERNAME/REPONAME.git"   
```
...where USERNAME and REPONAME are replaced with your GitHub username and your repository name, respectively. Note: If there is no `"repository"` object, create one.  

4. In the `package.json` file, add the line: `"homepage": "http://USERNAME.github.io/REPONAME",` where USERNAME and REPONAME are replaced with your GitHub username and your repository name, respectively  

5. Add these two lines to the `scripts` section of the `package.json` file:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```

Your `package.json` file should now look like this:
```json
{
  "name": "dog-party",
  "version": "1.0.0",
  "description": "Dog Party starter kit using webpack and SCSS/SASS enabled.",
  "main": "index.js",
  "homepage": "http://USERNAME.github.io/REPONAME",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/USERNAME/REPONAME.git"
  },
  "scripts": {
    "start": "webpack server",
    "build": "webpack",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "author": "Turing School of Software and Design",
  ...
}
```
6. In the terminal, run `npm install --save-dev gh-pages`
7. You should see these lines of JSON added to your `package.json` file:
  ```json
  "devDependencies": {
  "gh-pages": "^1.1.0"
  }
  ```
8. Run `npm run build` in the command line
9. Run `npm run deploy` in the command line

All of this will create a `gh-pages` branch in your repo with the contents from the `build` directory.

10. Now go back to your GitHub Repo and click `Settings` > `Pages`
11. Change the branch to `gh-pages` and click `Save`

Wait a few minutes (deploying takes time!) and then visit the GitHub pages site (http://USERNAME.github.io/REPONAME). You should see your app! If not, check out the console to see what errors you're getting and troubleshoot from there.

## When You Make New Changes

If you make new changes to your `main` branch, GitHub Pages doesn't automatically know about these changes, and your site won't be up-to-date. You need to update the `gh-pages` branch to see those changes live on GitHub Pages. Here is how to update and keep everything in sync:

1. After you're done making changes, checkout your `main` branch and double-check to make sure it is up-to-date and there is nothing needed to be committed at this point
1. Run `npm run build` in the command line
1. Run `npm run deploy` in the command line
