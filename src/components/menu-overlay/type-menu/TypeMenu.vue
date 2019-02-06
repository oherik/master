<template>
 <div class = "type-menu__wrapper">
    <transition name="slide-fade">
      <div class = "type-menu" v-if="!this.$store.state.hideTypeMenu">
          <area-menu v-if="this.$store.state.activeTool == 'area'"></area-menu>
          <line-menu v-if="this.$store.state.activeTool == 'line'"></line-menu>
    
      </div>
    </transition>
    <b-button v-b-tooltip.hover.right.d400 title="Minimize type panel" class = "show-hide show-hide--shown" 
      v-if="!this.$store.state.hideTypeMenu"
      @click="$store.commit('setHideTypeMenu', true)">
        <v-icon name="caret-left" scale="1.5"/>
    </b-button>
    <b-button v-b-tooltip.hover.right.d400 title="Show type panel" class = "show-hide show-hide--hidden" 
      v-if="this.$store.state.hideTypeMenu" 
      @click="$store.commit('setHideTypeMenu', false)">
        <v-icon name="caret-right" scale="1.5"/>
    </b-button>
  </div>
</template>

<script>
import AreaMenu from './AreaMenu.vue'
import LineMenu from './LineMenu.vue'

export default {
  name: 'TypeMenu',
  components: {
    AreaMenu,
    LineMenu,
  },
  computed: {
      
  },
  methods: {
   
  }
}
//f8fbfc
//#03A9F4
</script>

<style>
  .type-menu{
    height: 100%;
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    border-right: solid 1px;
    border-color: #e9ecef;
    padding: 1vh;
    z-index: 10;
    width: 35vh;
  }
  .type-menu__wrapper{
    height: 100%;
  }
  .show-hide{
    position: absolute;
    top: 1vh;
        z-index: 11;
  }
  .show-hide--shown{
    right: -4vh;
  }
  .show-hide--hidden{
    left: 1vh;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }

</style>