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

    <button class="btn home-btn">
      Contact realtor
    </button>
  </div>
</template>

<script>
export default {
  props:{
    home: Object 
  }
}
</script>

<style>

</style>
