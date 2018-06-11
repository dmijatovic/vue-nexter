<template>
  <div class="story-content">
    <h3 class="h-3 mb-md">{{ title }}</h3>
    <h2 class="h-2 mb-sm"
      v-html="statement">
    </h2>
    <p class="story-text">
      {{ text }}
    </p>
    <button class="btn"
      @click="ctaClick">
      {{cta.label}}
    </button>
  </div>
</template>

<script>
import {eventSvc} from '../system/eventSvc';
import {cfg} from '../app.cfg';
export default {
  data(){
    return {
      title: cfg.story.title,
      statement: cfg.story.statement,
      text: cfg.story.text,
      cta: cfg.story.cta 
    }
  },
  methods:{
    ctaClick(){
       //console.log("show modal");
      eventSvc.$emit('showPopup',{
        img:'img/gal-1.jpeg',
        title:'Nexter - Story component',
        subtitle:'Clicked on the CTA button',
        body:`
        Hi there! This demo project is product of advanced CSS 
        training I followed online on Udemy. It is not completely functional 
        website due to scope of the exercise. The goal is to learn 
        CSS grid standard and demo CSS knowledge I obtained during the training.
        <br/><br/>
        The CSS is written using SCSS version of SASS. PostCSS 
        auto-prefixer is used to automatically add required browser prefixes 
        based on the info from CanIUse website. 
        <br/><br/>
        The content is split into 12 reusable components. 
        The project is compiled with Webpack.         
        `
      });
    }
  }
}
</script>

<style lang="scss">
@import '../scss/story';
</style>
