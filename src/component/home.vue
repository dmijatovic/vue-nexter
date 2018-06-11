<template>
  <div class="home">
    <img :src="home.img" alt="Image of home" class="home-img">
    <svg-icon
      :svgIco="home.svgIco"
      :cssClass="'home-like'">
    </svg-icon>
    <h5 class="home-name">{{home.title}}</h5>
    
    <div class="home-location">
      <svg-icon
        :svgIco="home.location.svgIco">
      </svg-icon>
      <p>{{home.location.country}}</p>
    </div>

    <div class="home-rooms">
      <svg-icon
        :svgIco="home.rooms.svgIco">
      </svg-icon>
      <p>{{home.rooms.value}}</p>
    </div>

    <div class="home-area">
      <svg-icon
        :svgIco="home.area.svgIco">
      </svg-icon>
      <p>{{home.area.value}}m <sup>2</sup></p>
    </div>

    <div class="home-price">
      <svg-icon
        :svgIco="home.price.svgIco">
      </svg-icon>
      <p>{{home.price.value}}</p>
    </div>

    <button class="btn home-btn"
      @click="showPopup">
      Contact realtor
    </button>
  </div>
</template>

<script>
import {eventSvc} from '../system/eventSvc';
export default {
  props:{
    home: Object 
  },
  methods:{
    showPopup(){
       //console.log("show modal");
      eventSvc.$emit('showPopup',{
        img: this.home.img,
        title:'Nexter - Home component',
        subtitle:'Clicked on contact realtor button',
        body:`
        Hi there! This demo project is product of advanced CSS 
        training I followed online on Udemy. It is not completely functional 
        website due to scope of the exercise. The goal is to learn 
        CSS grid standard and demo CSS knowledge I obtained during 
        the training.
        
        The content is split into 12 reusable components. 
        The project JavaScript, CSS and all assets are minified and compiled with Webpack. 
        
        <br/><br/>        
        During the development webpack-dev-server is used for live reloading.
        `
      });
    }
  }
}
</script>

<style>

</style>
