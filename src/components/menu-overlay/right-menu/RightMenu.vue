<template>
  <div class = "right-menu">
    <map-buttons></map-buttons>
    <layer-menu></layer-menu>
  </div>
</template>

<script>

import LayerMenu from './LayerMenu.vue'
import MapButtons from './MapButtons.vue'

export default {
  name: 'RightMenu',
  components: {
    LayerMenu,
    MapButtons,
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

  .right-menu{
    position: absolute;
    top: 0;
    right: 0;    
    height: 91vh;
    display: flex;
    flex-direction: row;
  }

</style>  