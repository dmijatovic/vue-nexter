<template>
  <div class="sidebar">
    <!-- Sidebar -->
    <button class="nav-btn"
      @click="showModal">
      <!--needs char value to be shown -->
      <span class="nav-btn-line">&nbsp;</span>
      <span class="nav-btn-line">&nbsp;</span>
      <span class="nav-btn-line">&nbsp;</span>      
    </button>
  </div>
</template>

<script>
import { eventSvc } from '../system/eventSvc';
export default {
  methods:{
    showModal(){
      //console.log("show modal");
      eventSvc.$emit('showPopup',{
        img:'img/gal-3.jpeg',
        title:'Nexter - Sidebar component',
        subtitle:'Clicked on the menu bar',
        body:`
        
        Hi there! This demo project is product of advanced CSS 
        training I followed online on Udemy. It is not completely functional 
        website due to scope of the exercise. The goal is to learn 
        CSS grid standard and demo CSS knowledge I obtained during the training.
        <br/><br/>                
        Grid layout defines a two-dimensional grid-based layout system, 
        optimized for user interface design. In the grid layout model, 
        the children of a grid container can be positioned into arbitrary 
        slots in a predefined flexible or fixed-size layout grid.
        <br/><br/>                        
        Beside CSS grid layout this demo is created with Vue.js.  
        The content is split into 12 reusable components. 
        The project JavaScript, CSS and all assets are minified and compiled with Webpack. 
        During the development webpack-dev-server is used for live reloading.
        `
      });
    }
  }
}
</script>

<style lang="scss">
@import '../scss/sidebar';
</style>
