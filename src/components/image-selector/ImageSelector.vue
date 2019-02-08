<template>
  <div class = "image-selector">

    <h2>Task 1 (Lerum)</h2>

      <div class = "image-selector__toggle">
        Väg
        <toggle-button v-model="t1.street"
                  color="#03a9f4"
                  :sync="true"
                  :labels="true"/>
        </div>

        <div class = "image-selector__toggle">
        Selected
        <toggle-button v-model="t1.streetSelected"
  
                  color="#03a9f4"
                  :sync="true"
                  :labels="true"/>
        </div>
         <b-dropdown-divider></b-dropdown-divider>
        <div class = "image-selector__toggle">
         
        Area
        <toggle-button v-model="t1.area"
                  color="#03a9f4"
                  :sync="true"
                  :labels="true"/>
        </div>
        
        <div class = "image-selector__toggle">
        Selected
        <toggle-button v-model="t1.areaSelected"
                  color="#03a9f4"
                  :sync="true"
                  :labels="true"/>
        </div>



    <b-button-group horizontal>
      <b-button @click="$store.commit('setBackgroundImage','granmyrsgatan.png')"> Vue-loggan </b-button>
      <b-button @click="$store.commit('setBackgroundImage','hej.png')"> Hej :D </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'ImageSelector',
  data () {
    return {
      t1: {
        street: false,
        area: false,
        streetSelected: true,
        areaSelected: true,
      },
    }
  },
  computed: {
    areaType(){
      return this.$store.state.activeArea;
    },
    lineType(){
      return this.$store.state.activeLine;
    },
    streetType(){
      return this.$store.state.streetType;
    }
  },
  methods:{
    updateT1Layers(){
      let newLayers = [];
       if(this.t1.area){
         if(this.areaType == "industry"){
           newLayers.push("lerum__area.png");
         }else{
           newLayers.push("lerum__area--no-type.png");
         }
    
       }
      if(this.t1.street){
         if(this.lineType == "street"){
           if(this.streetType == "Local street"){
            newLayers.push("lerum__street--local.png");
           }else{
           newLayers.push("lerum__street.png");
           }
         }else{
           newLayers.push("lerum__street--no-type.png");
         }
         if(this.t1.streetSelected){
            newLayers.push("lerum__street--selection.png");
         }
       }
       if(this.t1.area && this.t1.areaSelected){
            newLayers.push("lerum__area--selection.png");
        }
      this.$store.commit("setImageLayers",newLayers);

    }
  },
  watch: {
   t1: {
     handler: function () {
       this.updateT1Layers();
     },
    deep: true,
   },
   lineType: {
     handler: function () {
       this.updateT1Layers();
     },
   },
   areaType: {
     handler: function () {
       this.updateT1Layers();
     },
   },
   streetType:{
      handler: function () {
       this.updateT1Layers();
     },
   }
  },

}

</script>

<style>
  .image-selector{
    z-index: 12;
    position: absolute;
    left: 40vh;
    width: 80vh;
  }
  .image-selector__toggle{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }


</style>  