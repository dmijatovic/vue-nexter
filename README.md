# Nexter - CSS GRID - and Vuejs app

This repo is based on Nexter design from [advanced CSS/SCSS training](https://www.udemy.com/advanced-css-and-sass/) which is coverted into an Vue.js app. The goal of the project is to learn [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and experiment how it can be implemented with Vue.js.

The original github project created by instructor Jonas Schmedtmann [can be found here](https://github.com/jonasschmedtmann/advanced-css-course).

**Note, the project setup is advanced. It assumes you are familiair with webpack, node, npm, sass/scss and vuejs. If you are new to front-end development and mentioned technologies I recommend first following basic trainings first. That will help your better distinct between grid web-design and front-end framework-technology I used and  choices/preferences I made.**

## NPM scripts

After cloning project, run `npm install` to install all dependencies. Then use following scripts to (further) develop or build app.

- `npm run dev:` runs webpack and vue in development mode
- `npm run build:` it will complete solution and store it in dist folder. if dist folder does not exist it will create it. Note! if dist folder exists it will DELETE all content before creating new output.

## Vue components

The difference between `original` SCSS training and this repo is that all `parts` are Vuejs components. In addition, webpack is used for developement (webpack-dev-server) and deployment (production build).

## CSS Grid and CSS tricks learned during the training

The project layout uses [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Grid setup - 3 variants

Defining a grid layout can follow 3 different approaches. In all cases grid layout is defined at the parent element and concerns its children.

```scss

  .parent{
    display: grid;
    grid-define-rows:
  }

```