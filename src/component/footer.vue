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
        path:'/#/dream-home',label:'Find your dream home'
      },{
        path:'/#/proposal',label:'Request proposal'
      },{
        path:'/#/planner',label:'Download home planner'
      },{
        path:'/#/contact',label:'Contact us'
      },{
        path:'/#/submit-property',label:'Submit your property'
      },{
        path:'/#/work',label:'Come work with us'
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
