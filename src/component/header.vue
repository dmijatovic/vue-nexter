<template>
  <header class="header">
    <img :src="logo.src" :alt="logo.label" class="header-logo">
    <h3 class="h-3">{{ title }}</h3>
    <h1 class="h-1">{{ callout }}</h1>
    <button 
      class="btn header-button"
      @click="showModal">View our properties</button>
    <div class="header-seenon-text">
      {{seenon.title}}
    </div>
    <div class="header-seenon-logos">
      <img v-for="logo in seenon.logos" 
        :src="logo.src" alt=""
        :key="logo.src">
    </div>
  </header>
</template>

<script>
import {eventSvc} from '../system/eventSvc';
export default {
  data(){
    return {
      logo:{src:'img/logo.png', label:'Nexter logo'},
      title:'Your own home:',
      callout:'Ultimate personal freedom',
      seenon:{
        title:'As seen on',
        logos:[
          {src:'img/logo-bbc.png', label:'BBC logo'},
          {src:'img/logo-forbes.png', label:'Forbes logo'},
          {src:'img/logo-techcrunch.png', label:'Techcrunch logo'},
          {src:'img/logo-bi.png', label:'BI logo'},
        ]
      }
    }
  },
  methods:{
    showModal(){
      //console.log("show modal");
      eventSvc.$emit('showPopup',{
        img:'img/gal-7.jpeg',
        title:'Nexter - Header component',
        subtitle:'Clicked on the CTA button!',
        body:`
        <p>
        Hi there! This demo project is product of advanced CSS 
        training I followed online on Udemy. It is not completely functional 
        website due to scope of the exercise. The goal is to learn 
        CSS grid standard and demo CSS knowledge I obtained during the training.
        </p><p>
        The standard is not supported by older browsers like 
        Internet Explorer or old versions of Firefox, Chrome and 
        Safari. According to CanIUse statistics in June 2018 the grid 
        layout syntax is supported by the browsers of 85% of 
        global users.     
        </p>
        `
      });
    }
  }
}
</script>

<style lang="scss">
@import '../scss/header';
</style>
