<template>
  <section class="features">
    
    <!-- Features -->
    <feature-item v-for="item in features"
      :feature="item"
      :key="item.svgIco">
    </feature-item>

  </section>
</template>

<script>
import featureItem from './feature.vue';
import { cfg } from '../app.cfg';
export default {
  components:{
    'feature-item': featureItem
  },
  data(){
    return{
      features: cfg.features
    }
  }
}
</script>

<style lang="scss">
@import '../scss/features';
</style>
