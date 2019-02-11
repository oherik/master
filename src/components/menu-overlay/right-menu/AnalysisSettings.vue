<template>
 <div v-if="this.$store.getters.showAnalysisSettings">
     
     <h3 class = "right-menu__heading">Analysis</h3>

    <div class = "right-menu__category">
      
        
    </div>
    <div class = "right-menu__category">
     

    </div>
    <b-dropdown-divider></b-dropdown-divider>


  </div>
</template>

<script>

export default {
  name: 'AnalysisSettings',
  components: {
    
  },
  methods: {
   
  },
  computed: {
    overlayOpacity: {
      get: function () {
        return this.$store.state.setOverlayOpacity*100;
      },
      set: function (newValue) {
        this.$store.commit("setOverlayOpacity", Math.round(newValue)/100);
      }
    },
  },
}
//f8fbfc
//#03A9F4
</script>

<style scoped>

</style>