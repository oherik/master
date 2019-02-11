<template>
 <div v-if="this.$store.getters.showMapSetting">
     
     <h3 class = "right-menu__heading">Map settings</h3>

    <div class = "right-menu__category">
       <b-form-group id=""
                        label="Opacity:"
                        label-for="opacity-slider">
           <div class = "right-menu__slider" id ="opacity-slider">
          <vue-slider
            ref="slider"
            v-model="backgroundOpacity"
            tooltip="hover"
            ></vue-slider>
          <b-input-group  size="sm"  append="%">
            <b-form-input size="sm"  v-model="backgroundOpacity"></b-form-input>
          </b-input-group>
        </div>
      </b-form-group>
        
    </div>
    <div class = "right-menu__category">
      <div class = "right-menu__checkbox">
        Show terrain
        <toggle-button v-model="showTopography"
            :value="false"
                color="#03a9f4"
                :sync="true"
                :labels="true"/>
      </div>
      <div class = "right-menu__checkbox">
        Show buildings
        <toggle-button
            :value="true"
            color="#03a9f4"
            :labels="true"/>
      </div>
       <div class = "right-menu__checkbox">
        Show roads
        <toggle-button
            :value="true"
            color="#03a9f4"
            :labels="true"/>
      </div>

    </div>
    <b-dropdown-divider></b-dropdown-divider>
  </div>
</template>

<script>

export default {
  name: 'MapSettings',
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

</style>