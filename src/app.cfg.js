
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
  homes:[{ 
      title:'Beautiful Family House', img: "img/house-1.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "USA", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "5 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "325"},
      price: { svgIco:'icon-key', value: "$2.200.000"}
    },{ 
      title:"Modern glass villa", img: "img/house-2.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "Canada", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "5 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "625"},
      price: { svgIco:'icon-key', value: "$2.750.000"}
    },{ 
      title:'Cozy Country Home', img: "img/house-3.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "UK", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "4 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "525"},
      price: { svgIco:'icon-key', value: "$550.000"}
    },{ 
      title:'Large Rustical Villa', img: "img/house-4.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "USA", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "7 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "560"},
      price: { svgIco:'icon-key', value: "$2.200.000"}
    },{ 
      title:'Majestic Villa', img: "img/house-5.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "Germany", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "18 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "1025"},
      price: { svgIco:'icon-key', value: "$3.500.000"}
    },{ 
      title:'Modern Familly Apartment', img: "img/house-6.jpeg", svgIco:'icon-heart-full',
      location:{ svgIco:'icon-map-pin', country: "Italy", cssClas:"home-location"},
      rooms: { svgIco:'icon-profile-male', value: "4 rooms"},
      //m2 is in the markup
      area: { svgIco:'icon-expand', value: "125"},
      price: { svgIco:'icon-key', value: "$666.000"}
  }],
  footer:{
    links:[{
      path:''
    }]
  }
};