<template>
  <footer class="footer">
    <ul class="nav">
      <li v-for="item in links"
        :key="item.label"
        class="nav-item">
        <a :href="item.path"
          class="nav-link">
          {{item.label}}
        </a>
      </li>
    </ul>
    <p class="copyright">
      &copy; {{ copyright }}
    </p>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      links:[{
        path:'#',label:'Find your dream home'
      },{
        path:'#',label:'Request proposal'
      },{
        path:'#',label:'Download home planner'
      },{
        path:'#',label:'Contact us'
      },{
        path:'#',label:'Submit your property'
      },{
        path:'#',label:'Come work with us'
      }],
      copyright:`
        Copyright 2018 by Jonas Schmedtmann. Feel free to use this project for your own purposes.
        This does NOT apply producing your own course or tutorial based on this project.
      `
    }
  }

}
</script>

<style lang="scss">
@import '../scss/footer';
</style>
