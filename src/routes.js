
const Home = {template:'<h1>Home</h1>'};
const Page1 = {template:'<h1>page 1</h1>'};
const Page2 = {template:'<h1>page 2</h1>'};
const Page3 = {template:'<h1>page 3</h1>'};

export const routes=[{
  path:'/', component: Home, label:'Hotels',svgIco:'icon-home'
},{
  path:'/flight', component: Home, label:'Flight', svgIco:'icon-aircraft-take-off'
},{
  path:'/rent-a-car', component: Home, label:'Car rental', svgIco:'icon-key'
},{
  path:'/tours', component: Home, label:'Tours', svgIco:'icon-map'
}];