# Nexter - CSS GRID - and Vuejs app

This repo is based on Nexter project from [advanced CSS/SCSS training](https://www.udemy.com/advanced-css-and-sass/) and build with Vue.js. The goal of the project is to learn the [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and experiment how CSS grid layout can be implemented using Vue.js.

The original github project, created by Jonas Schmedtmann, [can be found here](https://github.com/jonasschmedtmann/advanced-css-course).

**The stup of this project is pretty advanced. It assumes knowledge of webpack, node, npm, sass/scss and vuejs. If you are new to front-end development and mentioned technologies I recommend following the basic trainings first. After that you can check this project to see the choices I made during the setup.**

## NPM scripts

After cloning project, run `npm install` to install all dependencies. Then use following scripts to (further) develop or build app.

- `npm run dev:` runs webpack and vue in development mode
- `npm run build:` it will complete solution and store it in dist folder. if dist folder does not exist it will create it. Note! if dist folder exists it will **DELETE** all content before creating new output.

## VueJS components

The difference between `original` SCSS training (and project) and thisone is that all `parts` are created as VueJS components. Furthermore, Webpack is used for developement (webpack-dev-server) and deployment (production build).

## CSS Grid layout and other 'tricks' learned during the training

The project layout uses [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Grid setup ( 3 variants )

Defining a grid layout can follow 3 different approaches. In all cases grid layout is defined at the parent element and concerns its children.

```scss

  .parent{
    display: grid;
    grid-define-rows:
  }

```