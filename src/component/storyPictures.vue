<template>
  <div class="story-pictures">
    <img v-for="(pic, i) in pictures"
      :src="pic.img" 
      :alt="pic.label"
      :key="pic.src"
      :class="`story-pic-${i}`" />
  </div>
</template>

<script>
import { cfg } from '../app.cfg';
export default {
  data(){
    return {
      pictures: cfg.story.pictures
    }
  }
}
</script>

<style lang="scss">
@import '../scss/story';
</style>