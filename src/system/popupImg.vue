<template>
  <section class="popup"
    :class="{active:show}">
    <div class="popup-window">
      <div class="popup-image"
        :style="bgImg">
        <!-- <img :src="img" alt="Image">-->
      </div>
      <div class="popup-content">
        <h2 class="popup-title">
          {{title}}
        </h2>
        <h3 class="popup-subtitle">
          {{subtitle}}
        </h3>
        <p class="popup-body"
          v-html="body">
        </p>
      </div>
      <div class="popup-close"
        @click="togglePopup">&times;</div>
    </div>
  </section>
</template>

<script>

//import eventSvc from './eventSvc.vue';
import { eventSvc } from './eventSvc';

export default {
  data(){
    return {
      show: false,
      img: 'img/realtor-1.jpeg',
      title: "This is my title",
      subtitle: "This is subtitle",
      body: `      
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `,
      
    }
  },
  computed:{
    bgImg(){
      return `background-image: url(${this.img});`
    }
  },
  methods:{
    togglePopup(){
      this.show = !this.show;
      //console.log("toggle popup...", this.show);
    },
    updatePopup(data){
      this.img = data.img;
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.body = data.body;      
    }
  },
  created(){
    eventSvc.$on('showPopup',(data)=>{
      //console.log("Show popup...");
      this.updatePopup(data);
      this.show = true;
    });
  }
}
</script>

<style lang="scss">
@import 'popupImg';
</style>
