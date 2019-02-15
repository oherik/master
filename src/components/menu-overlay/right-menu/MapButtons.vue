<template>
  <div class = "map-buttons">
    <b-button-group vertical class = "map-buttons__button-group">
      <b-button v-b-tooltip.hover.left title="Zoom in"> <v-icon name="plus" scale="1.5"/></b-button>
      <b-button v-b-tooltip.hover.left title="Zoom out"> <v-icon name="minus" scale="1.5"/></b-button>
    </b-button-group>
    <b-button-group vertical class = "map-buttons__button-group">
      <b-button
        v-b-tooltip.hover.left
        title="Analysis"
        :pressed.sync="showAnalysisSettings"
      > 
     <span class="fa-stack">
  <i class="fas fa-search fa-stack-1x"></i>
  <i class="fas fa-chart-bar fa-stack-2x"></i>
</span>
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
      <span class="fa-stack">
  <i class="fas fa-cog fa-stack-1x"></i>
  <i class="fas fa-map-marked-alt fa-stack-2x"></i>
</span>
      </b-button>
     </b-button-group>
    <b-button-group vertical class = "map-buttons__button-group">
      <b-button
        v-b-tooltip.hover.left
        title="Sketch details"
        :pressed.sync="showReport"
      > 
      
        <v-icon name="file-invoice" scale="1.5"/>
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
     showReport:{
      get: function () {
        return this.$store.getters.showReport;
      },
      set: function (newValue) {
        if(newValue){
           this.$store.commit("setActiveLayerMenu", "report");
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
.fa-chart-bar {
 top: -1em;
    font-size: 1em;
    left: -0.8em;
    }
.fa-search{
  top: -1em;
    left: 0.1em;
}
.fa-map-marked-alt{
  
    top: -0.9em;
    font-size: 1em;
    left: -0.8em;
}
.fa-cog{
        top: -0.7em;
    left: 0.2em;
}
.fa-stack{
      width: auto;
      height: auto;
}

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