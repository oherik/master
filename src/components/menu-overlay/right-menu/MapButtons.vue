<template>
  <div class = "map-buttons">
    <b-button-group vertical class = "map-buttons__button-group">
      <b-button v-b-tooltip.hover.left title="Zoom in"> <v-icon name="plus" scale="1.5"/></b-button>
      <b-button v-b-tooltip.hover.left title="Zoom out"> <v-icon name="minus" scale="1.5"/></b-button>
    </b-button-group>
    <b-button-group vertical>
      <b-button
        v-b-tooltip.hover.left
        title="Layers"
        @click="$store.commit('showLayerMenu', !$store.state.showLayerMenu)"
      > 
        <v-icon name="layer-group" scale="1.5"/>
      </b-button>
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
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    margin-right: 2vh;  
  }
  .map-buttons__button-group{
    margin-bottom: 1vh;
  }

  .btn-secondary{
    padding: 1vh !important;
  }

</style>  