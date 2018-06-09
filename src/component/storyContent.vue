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
      console.log("Click on cta button...", this.cta.action);
    }
  }
}
</script>

<style lang="scss">
@import '../scss/story';
</style>
