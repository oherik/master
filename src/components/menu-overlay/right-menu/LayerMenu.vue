<template>
 <div class = "layer-menu" v-if="this.$store.state.showLayerMenu">
     
     <h3 class = "layer-menu__heading">Map</h3>

    <div class = "layer-menu__category">
      <p class = "layer-menu__setting">Opacity</p>
        <div class = "layer-menu__slider">
          <vue-slider
            ref="slider"
            v-model="backgroundOpacity"
            tooltip="hover"
            ></vue-slider>
          <b-input-group  size="sm"  append="%">
            <b-form-input size="sm"  v-model="backgroundOpacity"></b-form-input>
          </b-input-group>
        </div>
    </div>
    <div class = "layer-menu__category">
      <div class = "layer-menu__checkbox">
        Show terrain
        <toggle-button v-model="showTopography"
            :value="false"
                color="#03a9f4"
                :sync="true"
                :labels="true"/>
      </div>
      <div class = "layer-menu__checkbox">
        Show buildings
        <toggle-button
            :value="true"
            color="#03a9f4"
            :labels="true"/>
      </div>
       <div class = "layer-menu__checkbox">
        Show roads
        <toggle-button
            :value="true"
            color="#03a9f4"
            :labels="true"/>
      </div>

    </div>
    <b-dropdown-divider></b-dropdown-divider>


    <b-button v-b-tooltip.hover.right.d400 title="Close layer panel"
      class = "hide-layer-menu-button" 
      v-if="this.$store.state.showLayerMenu"
      @click="$store.commit('showLayerMenu', false)">
        <v-icon name="times" scale="1.5"/>
    </b-button>
  </div>
</template>

<script>

export default {
  name: 'LayerMenu',
  components: {
    
  },
  methods: {
   
  },
  computed: {
    backgroundOpacity: {
      get: function () {
        return this.$store.state.backgroundOpacity*100;
      },
      set: function (newValue) {
        this.$store.commit("setBackgroundOpacity", Math.round(newValue)/100);
      }
    },
     showTopography: {
      get: function () {
        return this.$store.state.showTopography;
      },
      set: function (newValue) {
        if(newValue == 'true' || newValue == true){
          this.$store.commit("setShowTopography", true);
        }
        if(newValue == 'false' || newValue == false){
          this.$store.commit("setShowTopography", false);
        }
      }
    }
  },
}
//f8fbfc
//#03A9F4
</script>

<style scoped>
  .layer-menu{
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    border-left: solid 1px;
    border-color: #e9ecef;
    z-index: 10;
    width: 30vh;
    padding: 1vh 2vh;
    text-align: left;
  }
  .layer-menu__category{
    padding-top: 2vh;
  }
  .layer-menu__checkbox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .vue-slider-component .vue-slider-process{
    background-color: #03a9f4 !important;
  }
  .vue-slider-tooltip{
    border-color: #03a9f4 !important;
    background-color: #03a9f4 !important;
  }
  .layer-menu__slider{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
      .vue-slider-horizontal{
        margin-right: 2vh;
      flex: 2;
    }
    .input-group{
      flex: 1;
    }


    .hide-layer-menu-button{
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