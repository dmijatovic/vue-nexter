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

### Explicit vs implicit grid declaration

Rows and columns can be explicitelly defined using `grid-template-rows` and `grid-template-columns`. If there are more items then grid will continue to create new rows to accomodate additional items. By defaul new rows (also called tracks) are created and have auto width.

### Defining grid area (parent element)

Define a grid layout in the parent element.

```scss
  //DEFINE GRID
  .parent{
    display: grid;
    //create 3 columns 15rem, 20rem, 15 rem
    grid-template-columns: 15rem 20rem 15rem;
    //create 5 columns with equal distribution
    grid-template-columns: repeat(5, 1fr);
    //define new (implicit) columns to be 50% of width of explicit columns
    grid-auto-columns: .5fr;
    //create 3 row with minimum height to fit the content
    grid-template-rows: repeat(3,min-content); 
    //define new (implicit rows) to have height of 20rem;
    grid-auto-rows: 20rem;
    //define gap between cells to be 5rem
    grid-gap: 5rem;
  }

```

### Placing grid elements (children elements)
Can be done using 3 different methods

```scss
  // 1 method: using grid line numbers
  .child{
    //position this child to ocupy columns 1 to 3
    grid-column: 1 / 3;
    //and rows 1 annd 2
    grid-row: 1 / 2;
  }

  // 2 method: using named grid lines
  .parent{
    //create 5 columns with equal distribution
    //name grid lines cell-start 1 / 5 and cell-end 1/5
    grid-template-columns: repeat(5,[cell-start] 1fr [cell-end]);
  }
  .child{
    //position child to ocupy columns 2 to 4 
    grid-column: cell-start 2 / cell-end 4;
  }

  // 3 method: using named grid area
  //note defined grid needs to correspond to exact number of defined cells
  .parent{
    //definition is array of names per row [space] separated
    grid-template-areas: "menu head head"
                 "menu body body"
                 "foot foot foot" 
  }
  .menu{
    //position this element at menu area
    grid-area: menu;
  }
  .head{
    //position this element at head area
    grid-area: head;
  }

```

### Aligning grid items to grid area (items = justify-items)

Aligning of items is similair to flexbox approach. Justify-items is additional command in grid. Similair to flexbox item can override parent (general) alignment.

- `align` keyword is used for verical aligning
- `justify` keyword is used for horizontal aligning

```scss
  .parent{
    //align children item in the grid accross the column axe (y = vertical) 
    //options: center / stretch / start / end
    //default value: stretch
    align-items: center;

    //alow items accros the rows (x = horizontally)
    //options: stretch / start / end / center
    //default: stretch
    justify-items: center;
  }

  .child{
    // vertically align this child
    align-self: start;
    //horizontally align this child
    justify-self: start;
  }

```

### Aligning grid track to grid container (content = justify-content)

When defined grid ocupy more space than definined tracks, we can align tracks within container area. It works much like flexbox.

```scss

  .parent{
    //align grid content at center of defined grid area horizontally (x)
    //options: center / start / end / space-between / space-around / space-evenly
    justify-content: center;

    //align grid content at the center of defined grid area vertcally (y)
    //options: center / start / end / space-between / space-around / speace-evenly
    align-content: center
  }

```

### Min-content, max-content, minmax(), auto-fit & auto-fill keywoards

Minmax function is very useful addition and is used a lot in this project.

```scss
  //min-content, max-content and minmax(min, max) function
  .parent{
    //define first and last column to have width 
    //makes width of cell wide to fit content without using linebreaks
    grid-template-columns: max-content, repeat(3, 1fr), max-content;

    //takes minimum colum with to fit content USING linebreaks
    //note! it will overflow if row is fixed
    grid-template-columns: min-content, repeat(3, 1fr), min-content;

    //minmax (minimum value, maximum value)
    //define min to minimum of content AND max to
    //make first column minimun 150px and max to fit wrapped content
    grid-template-columns: minmax(150px, min-content), repeat(3, 1fr), min-content;
    //define 2 rows width height minimal to fit content and max 20rem
    grid-template-rows: repeat(2, minmax(min-content, 20rem));
  }
```

Auto-fit and auto-fill are helping responsive layout (without using media query).
When combining with minmax function a responsive layout with overlow can be created

```scss

  .parent{
    width: 1000px;
    //it will create required number of columns (10 in example) to fill in parent space 
    grid-template-columns: repeat (auto-fill, 100px);
    //it will create required number of columns (10 in example) to fill in parent space 
    grid-template-columns: repeat (auto-fit, 100px);
  }

```

**When combining auto-fill and minmax function you can create responsive layout  without using media queries.**

```scss
  .parent{
    //define parent with of 90% of viewport
    width: 90%;
    //create amount of columns needed to fit the viewport
    //ensure min width is 20rem or fill space evenly
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    //all new rows (when overflowing) should have height of 10rem
    grid-auto-rows: 10rem;
  }

```

### Placing images in grid cell and spanning over multiple cells

Images have specific ratio. This ratio is maintained in the grid, so the image will not automtically fill the cell completely. This might cause image to overflow the sell space. To make image fit the cell space completely following approach is used in this project (see gallery css):

- use figure to wrap image
- give image width and height of 100%
- set diplay: block on image
- use object-fit: cover on the image

```scss
  .figure{
    //fit image from row 1 into 2 (row) cells (span 2 rows)
    grid-row: 1 / span 2;
    //fit image from col 1 into 2 (col) cells (span 2 cols)
    grid-column: 1 / span 2;

    img{
      //use display block to avoid white space
      display: block;
      //set width and height (to use object-fit)
      width: 100%;
      height: 100%;
      //fit image into area
      object-fit: cover;
    }
  }

```

### Responsive grid setup

Using variable/flexible definition on the grid we can create responsive grid layout for the cards or images that does not require use of media query at all!

```scss
  //responsive layout using grid only
  //no media-queries needed
  display: grid;
  //auto create number of columns that fits minmax defintion
  //each columns should be at least 25rem (25x16) 
  //and each column should expand equaly when there is more space
  //when space is below minimum grid will move items into next row
  //so the rows will be automatically added too
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); 
  //define (inner) gap/gutter/space between grid items
  //note! gap does not include outer padding on the items
  grid-gap: 5rem;

```


