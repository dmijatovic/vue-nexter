
/**
 * App config file 
 * this is initial idea
 */
 export const cfg = {
  header:{
    logo:'img/logo.png',
    title:'BookMe 2020'
  },  
  features:[{
    svgIco:'icon-global',
    title:"World's best luxury homes",
    text:`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
    `
  },{
    svgIco:'icon-trophy',
    title:'Only the best properties',
    text:`
    Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
    `
  },{
    svgIco:'icon-map-pin',
    title:'All homes at top location',
    text:`
    Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
    `
  },{
    svgIco:'icon-key',
    title:'New home in one week',
    text:`
    Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    `
  },{
    svgIco:'icon-presentation',
    title:'Top 1% realtors',
    text:`
    Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
    `
  },{
    svgIco:'icon-lock',
    title:'Secure payments on nexter',
    text:`
    Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
    `
  }],
  story:{
    title:'Happy Customers',
    statement:'&ldquo;The best decision of our lives&rdquo;',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!',
    cta:{
      label: 'Find your home now!',
      action:'should send you somewhere'
    },
    pictures:[{
      img:'img/story-1.jpeg', label:'Couple with new home'
    },{
      img:'img/story-2.jpeg', label:'New house'
    }]
  },
  svg:{
    //svg icon file
    //sprite holds all icons
    //you refrence using #icon-name
    iconFile:'img/sprite.svg',
    icoSearch: 'icon-magnifying-glass' 
  },
  footer:{
    links:[{
      path:''
    }]
  }
};