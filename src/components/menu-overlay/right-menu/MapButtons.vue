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
        :pressed.sync="showAnalysisSettings"
      > 
        <v-icon name="chart-pie" scale="1.5"/>
      </b-button>
      <b-button
        v-b-tooltip.hover.left
        title="Sketch layers"
        :pressed.sync="showLayerSettings"
      > 
        <v-icon name="layer-group" scale="1.5"/>
      </b-button>
      <b-button
        v-b-tooltip.hover.left
        title="Map settings"
        :pressed.sync="showMapSetting"
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
    showMapSetting: {
      get: function () {
        return this.$store.getters.showMapSetting;
      },
      set: function (newValue) {
       if(newValue){
           this.$store.commit("setActiveLayerMenu", "map");
        } else {
           this.$store.commit("setActiveLayerMenu", '');
        }
      }
    },
    showAnalysisSettings:{
      get: function () {
        return this.$store.getters.showAnalysisSettings;
      },
      set: function (newValue) {
        if(newValue){
           this.$store.commit("setActiveLayerMenu", "analysis");
        } else {
           this.$store.commit("setActiveLayerMenu", '');
        }
      }
    },
    showLayerSettings:{
      get: function () {
        return this.$store.getters.showLayerSettings;
      },
      set: function (newValue) {
        if(newValue){
           this.$store.commit("setActiveLayerMenu", "layer");
        } else {
           this.$store.commit("setActiveLayerMenu", '');
        }
      }
    }
      
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