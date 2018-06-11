<template>
  <section class="app-container">
    <app-sidebar></app-sidebar>
    <app-header></app-header>
    <app-realtors></app-realtors>
    <app-features></app-features>
    <story-pictures></story-pictures>
    <story-content></story-content>
    <app-homes></app-homes>  
    <app-gallery></app-gallery>
    <app-footer></app-footer>
    <app-popup></app-popup>
  </section>
</template>

<script>
import { cfg } from './app.cfg';
import appSidebar from './component/sidebar.vue';
import appHeader  from './component/header.vue';
import appRealtors from './component/realtors.vue';
import features from './component/features.vue';
import storyPictures from './component/storyPictures.vue';
import storyContent from './component/storyContent.vue';
import homes from './component/homes.vue';
import gallery from './component/gallery.vue';
import appFooter from './component/footer.vue';
 
export default {
  created(){    
  },
  components:{
    'app-sidebar': appSidebar,
    'app-header': appHeader,
    'app-realtors': appRealtors,
    'app-features': features,
    'story-pictures': storyPictures,
    'story-content': storyContent,
    'app-homes': homes,
    'app-gallery': gallery,
    'app-footer': appFooter
  },
  /*
  data(){
    return {
      menuItems: cfg.menuItems,      
    }
  },*/
  methods:{
    
  }
}
</script>

<style lang="scss">
</style>
