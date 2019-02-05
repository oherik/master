<template>
 <div class = "layer-menu" v-if="this.$store.state.showLayerMenu">
    haj
    
      <vue-slider ref="slider" v-model="backgroundOpacity"></vue-slider>


      <b-form-checkbox id="checkbox1"
                     v-model="showTopography"
                     value="true"
                     unchecked-value="false">
      Show terrain
      </b-form-checkbox>
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

<style>
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
    width: 20vh;
  }
</style>