<template>
 <div v-if="this.$store.getters.showLayerSettings">
     
     <h3 class = "right-menu__heading">Sketch layers</h3>
    <div class = "right-menu__category" v-if="activeSketchId == 0">
     <layer-item
        name="Street 1"
        color="#FFFFFF"
        :svg-filepath= "require('../../../assets/SVG/tertiary-road.svg')"
      ></layer-item>  
      <layer-item
        name="Industry 1"
        color="#ada5d7"
        icon-name="industry"
      ></layer-item>  
    </div>
    <div class = "right-menu__category" v-if="activeSketchId == 1">
      <layer-item
        name="Pedestrian path 1"
        color="#DDD4BD"
        icon-name="walking"
      ></layer-item>    
      <layer-item
        name="Street 1"
        color="#FFFFFF"
        :svg-filepath= "require('../../../assets/SVG/tertiary-road.svg')"
      ></layer-item>  
      <layer-item
        name="Park and nature 1"
        color="#98CE51"
        icon-name="tree"
      ></layer-item>  
      <layer-item
        name="Residential 4"
        color="#FFFF83"
        icon-name="home"
      ></layer-item>  
      <layer-item
        name="Residential 3"
        color="#FFFF83"
        icon-name="home"
      ></layer-item>  
      <layer-item
        name="Residential 2"
        color="#FFFF83"
        icon-name="home"
      ></layer-item>  
      <layer-item
        name="Residential 1"
        color="#FFFF83"
        icon-name="home"
      ></layer-item>    
          
      </div>
    <div class = "right-menu__category">
     

    </div>
    <b-dropdown-divider></b-dropdown-divider>


  </div>
</template>

<script>
import LayerItem from "./LayerItem.vue"
export default {
  name: 'LayerSettings',
  components: {
    LayerItem
  },
  methods: {
   
  },
  computed: {
    activeSketchId(){
      return this.$store.state.activeSketchId;
    }
  },
}

</script>

<style scoped>

</style>