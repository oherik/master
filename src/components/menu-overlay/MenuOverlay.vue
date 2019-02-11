<template>
  <div class = "menu-overlay">
    <b-row>
      <b-col md="auto">
        <tool-menu></tool-menu>
      </b-col>
    <b-col 
      md="auto"
      v-if="this.$store.state.activeTool == 'line'
      || this.$store.state.activeTool == 'area'
      || this.$store.state.activeTool == 'image'
    
    ">
      <type-menu></type-menu>
    </b-col>
    <b-col>
      <right-menu></right-menu>
    </b-col>
      </b-row>
  </div>
</template>

<script>
import ToolMenu from './tool-menu/ToolMenu.vue'
import TypeMenu from './type-menu/TypeMenu.vue'
import RightMenu from './right-menu/RightMenu.vue'

export default {
  name: 'MenuOverlay',
  components: {
    RightMenu,
    TypeMenu,
    ToolMenu
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
  .tab__close{
    margin-left: 1vh;
  }
  .tab__new{
    color: gray;
   }
  .menu-overlay{
      width: 100%;
      position: absolute;
      height: 92vh;
      top: 0;
      
    z-index: 11;
      opacity: 0.99;
    }
    .row{
      height: 100%;
    }
    .col-md-3{
      padding: 0 !important;
    }
    .vue-tabs{
background-color: #f8fbfc
    }
    .tab-content{
      display: none;
      height: 0;
    }
</style>  