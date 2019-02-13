<template>
  <div class = "right-menu-wrapper">
    <map-buttons></map-buttons>
     <img class = "scale" alt="" :src="require(`@/assets/50m.png`)">
    <div class = "right-menu" v-if="$store.getters.showRightMenu">
      <map-settings></map-settings>
      <layer-settings></layer-settings>
      <analysis-settings></analysis-settings>
      <report></report>
      <b-button v-b-tooltip.hover.right.d400 title="Close panel"
        class = "hide-right-menu-button" 
        @click="$store.commit('setActiveLayerMenu', '')">
          <v-icon name="times" scale="1.5"/>
      </b-button>
    </div>
  </div>
</template>

<script>

import MapButtons from './MapButtons.vue'
import MapSettings from "./MapSettings.vue";
import LayerSettings from "./LayerSettings.vue";
import AnalysisSettings from "./AnalysisSettings.vue";
import Report from "./Report.vue";

export default {
  name: 'RightMenu',
  components: {
    MapButtons,
    MapSettings,
    LayerSettings,
    AnalysisSettings,
    Report,
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
.scale{
    min-height: 0;
    min-width: 0;
    bottom: 1vh;
    left: -10vh;
    position: absolute;
}

  .right-menu-wrapper{
    position: absolute;
    top: 0;
    right: 0;    
    height: 100%;;
    display: flex;
    flex-direction: row;
  }

  .right-menu{
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    border-left: solid 1px;
    border-color: #e9ecef;
    z-index: 10;
    width: 35vh;
    padding: 2vh;
    text-align: left;
  }
  
  .right-menu__category{
    padding-top: 2vh;
  }
  .right-menu__checkbox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .right-menu .vue-slider-component .vue-slider-process{
    background-color: #03a9f4 !important;
  }
  .right-menu .vue-slider-tooltip{
    border-color: #03a9f4 !important;
    background-color: #03a9f4 !important;
  }
  .right-menu__slider{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .right-menu .vue-slider-horizontal{
        margin-right: 2vh;
      flex: 2;
    }
  .right-menu .input-group{
      flex: 1;
    }


  .hide-right-menu-button{
    position: absolute;
    top: 0vh;
    z-index: 11;
    right: 0vh;
    width: 4vh;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    }
</style>  