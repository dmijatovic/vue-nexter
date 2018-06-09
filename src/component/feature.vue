<template>
  <section class="feature-item">
    <!-- feature icon --> 
    <svg-icon
      :svgIco="feature.svgIco"
      :cssClass="'feature-icon'">
    </svg-icon>
    <!-- feature heading -->
    <h4 class="feature-heading">
      {{feature.title}}
    </h4>
    <p class="feature-text">
      {{feature.text}}
    </p>
  </section>
</template>

<script>
export default {
  props:{
    feature: Object
  }
}
</script>

<style>

</style>
