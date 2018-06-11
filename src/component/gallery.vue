<template>
  <section class="gallery">
    
    <!-- we need to fit image into container 
    <figure 
      class="gallery-item">
    -->
      <img v-for="item in houses" 
      :src="item.img" 
      :alt="item.label" 
      class="gallery-img"
      :key="item.img" />

    <!-- 
    </figure>
    -->
  </section>
</template>

<script>
export default {
  data(){
    return {
      houses:[
        {img:'img/gal-1.jpeg', label:'house 1'},
        {img:'img/gal-2.jpeg', label:'house 2'},
        {img:'img/gal-3.jpeg', label:'house 3'},
        {img:'img/gal-4.jpeg', label:'house 4'},
        {img:'img/gal-5.jpeg', label:'house 5'},
        {img:'img/gal-6.jpeg', label:'house 6'},
        {img:'img/gal-7.jpeg', label:'house 7'},
        {img:'img/gal-8.jpeg', label:'house 8'},
        {img:'img/gal-9.jpeg', label:'house 9'},
        {img:'img/gal-10.jpeg', label:'house 10'},
        {img:'img/gal-11.jpeg', label:'house 11'},
        {img:'img/gal-12.jpeg', label:'house 12'},
        {img:'img/gal-13.jpeg', label:'house 13'},
        {img:'img/gal-14.jpeg', label:'house 14'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/gallery';
</style>
