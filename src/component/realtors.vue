<template>
  <div class="realtors">
    <h3 class="h-3">{{title}}</h3>
    <div class="realtors-list">
      <template v-for="item in realtors">
        <img :src="item.img.src" 
          :alt="item.img.label" 
          :key="item.img.src"
          class="realtors-img">

        <div class="realtors-details"
          :key="item.img.name">
          <h4 class="h-4 light">{{item.name}}</h4>
          <p class="realtors-sold">{{item.sold}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'Top 3 relators',
      realtors:[{
        name:'Erik Feinman', sold:'245 houses sold',
          img:{src:'img/realtor-1.jpeg', label:"Photo Erik Feinman"}
      },{
        name:'Kim Brown', sold:'215 houses sold',
          img:{src:'img/realtor-2.jpeg', label:"Photo Erik Feinman"}
      },{
        name:'Toby Ramey', sold:'198 houses sold',
          img:{src:'img/realtor-3.jpeg', label:"Photo Erik Feinman"}
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/realtors';
</style>
