<template>
  <div class = "map-buttons">
    <b-button-group vertical class = "map-buttons__button-group">
      <b-button v-b-tooltip.hover.left title="Zoom in"> <v-icon name="plus" scale="1.5"/></b-button>
      <b-button v-b-tooltip.hover.left title="Zoom out"> <v-icon name="minus" scale="1.5"/></b-button>
    </b-button-group>
    <b-button-group vertical>
      <b-button
        v-b-tooltip.hover.left
        title="Analysis"
        @click="$store.commit('showAnalysisMenu', !$store.state.showAnalysisMenu)"
      > 
        <v-icon name="chart-pie" scale="1.5"/>
      </b-button>
      <b-button
        v-b-tooltip.hover.left
        title="Sketch layers"
      > 
        <v-icon name="layer-group" scale="1.5"/>
      </b-button>
      <b-button
        v-b-tooltip.hover.left
        title="Map settings"
        
        :pressed.sync="showLayerMenu"
      > 
        <v-icon name="map-marked-alt" scale="1.5"/>
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
    showLayerMenu: {
      get: function () {
        return this.$store.state.showLayerMenu;
      },
      set: function (newValue) {
        this.$store.commit("showLayerMenu", newValue);
      }
    },
      
  },
  methods: {
   
  }
}
//f8fbfc
//#03A9F4
</script>

<style scoped>

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

  .active{
    background-color: #03A9F4 !important; 
    border-color: #03A9F4  !important;
  }
</style>  