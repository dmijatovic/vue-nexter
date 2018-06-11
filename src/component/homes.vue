<template>
  <section class="homes">
    <!-- Home cards -->
    <home-card 
      v-for="(home, i) in homes"
      :home="home"
      :key="i">
    </home-card>
  </section>
</template>

<script>
import homeCard from './home.vue';
import {cfg} from '../app.cfg';
export default {
  components:{
    'home-card': homeCard
  },
  data(){
    return{
      homes: cfg.homes
    }
  }
}
</script>

<style>
@import '../scss/homes';
</style>
