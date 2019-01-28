<template>
  <div class = "map-buttons">
    <b-button-group vertical>
      <b-button v-b-tooltip.hover.left title="Zoom in"> <v-icon name="plus" scale="1.5"/></b-button>
      <b-button v-b-tooltip.hover.left title="Zoom out"> <v-icon name="minus" scale="1.5"/></b-button>
      <b-button v-b-tooltip.hover.left title="Background options"> <v-icon name="layer-group" scale="1.5"/></b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'MapButtons',
  components: {
    
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
  .map-buttons{
    position: absolute;
    top: 5vh;
    right: 2vh;    
  }

  .btn-secondary{
    padding: 1vh !important;
  }

</style>  