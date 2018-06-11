<template>
  <header class="header">
    <img :src="logo.src" :alt="logo.label" class="header-logo">
    <h3 class="h-3">{{ title }}</h3>
    <h1 class="h-1">{{ callout }}</h1>
    <button class="btn header-button">View our properties</button>
    <div class="header-seenon-text">
      {{seenon.title}}
    </div>
    <div class="header-seenon-logos">
      <img v-for="logo in seenon.logos" 
        :src="logo.src" alt=""
        :key="logo.src">
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      logo:{src:'img/logo.png', label:'Nexter logo'},
      title:'Your own home:',
      callout:'Ultimate personal freedom',
      seenon:{
        title:'As seen on',
        logos:[
          {src:'img/logo-bbc.png', label:'BBC logo'},
          {src:'img/logo-forbes.png', label:'Forbes logo'},
          {src:'img/logo-techcrunch.png', label:'Techcrunch logo'},
          {src:'img/logo-bi.png', label:'BI logo'},
        ]
      }

    }
  }
}
</script>

<style lang="scss">
@import '../scss/header';
</style>
