<template>
  <div class = "image-selector">

<!-- 
   __________________________TASK 1_______________________________
-->
    <h2>Task 1 (Lerum)</h2>
    <b-button-group vertical>
      
      <b-button :variant="'primary'" @click="resetTask(1)"> Go to task 1 </b-button>
      <b-button @click="t1CreateStreet"> Skapar väg </b-button>
      <b-button @click="t1CreateArea"> Skapar area </b-button>
      <b-button @click="t1Deselect"> Deselectar </b-button>
    </b-button-group>
    <div class = "image-selector__toggle">
      Select väg
      <toggle-button v-model="t1.streetSelected" :sync="true"/>
    </div>
    <div class = "image-selector__toggle">
      Select area
      <toggle-button v-model="t1.areaSelected" :sync="true"/>
    </div>

<!-- 
   __________________________TASK 2_______________________________
-->
     <h2>Task 2 (Lerum)</h2>
     <b-button-group vertical>
      <b-button :variant="'primary'" @click="resetTask(2)"> Go to task 2 </b-button>
    </b-button-group>
    <div class = "image-selector__toggle">
      Toggle error message
      <toggle-button v-model="t2.displayErrorMessage" :sync="true"/>
    </div>
    <div class = "image-selector__toggle">
      Ignore error
      <toggle-button v-model="t2.ignoreError" :sync="true"/>
    </div>
    <b-button-group vertical>
      <b-button @click="t2SelectStreet"> Select väg </b-button>
      <b-button @click="t2Deselect"> Deselect </b-button>
      <b-button @click="t2ChangeStreet"> Change street type to industry </b-button>
    </b-button-group>


<!-- 
   __________________________TASK 3_______________________________
-->

  <h2>Task 3 (Klarälven)</h2>
    <b-button-group vertical>
      <b-button :variant="'primary'" @click="resetTask(3)"> Go to task 3 </b-button>
    </b-button-group>

<!-- 
   __________________________TASK 4_______________________________
-->


<!-- 
   __________________________TASK 5_______________________________
-->

  </div>
</template>

<script>
export default {
  name: 'ImageSelector',
  data () {
    return {
      activeTask: 1,
      t1: {},
      t2: {},
      t3: {},
      t4: {},
      t5: {},
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
    t1CreateStreet(){
      this.t1.areaSelected = false;
      this.t1.streetSelected = true;
      this.t1.street = true;
    },
    t1CreateArea(){
      this.t1.streetSelected = false;
      this.t1.areaSelected = true;
      this.t1.area = true;
    },
    t1Deselect(){
      this.t1.streetSelected = false;
      this.t1.areaSelected = false;
    },
    t2ChangeStreet(){
      this.$store.commit("setStreetType", "Industry street");
    },
    t2SelectStreet(){
      this.$store.commit("setActiveLine", "street");
      let that = this;
      setTimeout(function(){that.$store.commit("setActiveTool", "line");}, 300);
      this.t2.streetSelected = true;
    },
    t2Deselect(){
      this.t2.streetSelected = false;
    },
    resetTask(number){
      switch(number){
        case 1: 
          this.t1 = {
            street: false,
            area: false,
            streetSelected: true,
            areaSelected: true,
          }
          this.$store.commit("mergeWithState",
            {
              backgroundImage: "lerum.png",
              backgroundTopography: "lerum-topography.png",
              activeTool: "select",
              activeLine: "unassigned",
              activeArea: "unassigned",
              streetType: null,
              activeMode: "sketch",
              overlay: "",
            }
          );
          break;
        case 2:
          this.t2 = {
            displayErrorMessage: false,
            ignoreError: false,
            streetSelected: false,
          }
          this.$store.commit("mergeWithState",
            {
              backgroundImage: "lerum.png",
              backgroundTopography: "lerum-topography.png",
              activeTool: "select",
              activeLine: "street",
              activeArea: "industry",
              streetType: "Local street",
              activeMode: "sketch",
              overlay: "",
            }
          );
          break;
        case 3:
          this.t3 = {};
          this.$store.commit("mergeWithState",
            {
              backgroundImage: "klar.png",
              backgroundTopography: "klar-topography.png",
              activeTool: "select",
              activeLine: "unassigned",
              activeArea: "unassigned",
              streetType: null,
              activeMode: "sketch",
              overlay: "",
            }
          );
      }
      this.activeTask = number;
    },

    updateLayers(){
      switch(this.activeTask){
        case 1:
          this.updateT1Layers();
          break;
        case 2:
          this.updateT2Layers();
          break;
        case 3:
          this.updateT3Layers();
          break;
        case 4:
          this.updateT4Layers();
          break;
        case 5:
          this.updateT5Layers();
          break;
      }
    },
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
    },

    updateT2Layers(){
      let newLayers = [];
      let isWrongStreetType = this.streetType != "Industry street";
      newLayers.push("lerum__area.png");
      if(isWrongStreetType){
        newLayers.push("lerum__street--local.png");
      }else{
        newLayers.push("lerum__street.png");
      }
      
      if(isWrongStreetType && !this.t2.ignoreError){
        if(this.t2.displayErrorMessage){
          newLayers.push("lerum__street--warning.png");
          newLayers.push("lerum__warning-message.png");
        }else{
          newLayers.push("lerum__street--warning.png");
        }
      }
      if(this.t2.streetSelected){
        newLayers.push("lerum__street--selection.png");
      }
      this.$store.commit("setImageLayers",newLayers);
     },

     updateT3Layers(){
       let newLayers = [];
      this.$store.commit("setImageLayers",newLayers);
     },
  },
  watch: {
    activeTask: {
      handler: function () {
       this.updateLayers();
     },
    },
   t1: {
     handler: function () {
       this.updateLayers();
     },
    deep: true,
   },
    t2: {
     handler: function () {
       this.updateLayers();
     },
    deep: true,
   },
   t3: {
     handler: function () {
       this.updateLayers();
     },
    deep: true,
   },
   lineType: {
     handler: function () {
       this.updateLayers();
     },
   },
   areaType: {
     handler: function () {
       this.updateLayers();
     },
   },
   streetType:{
      handler: function () {
        if(this.streetType == "Industry street"){ // Uppdaterar inte annars, oklart varför
          this.t2.ignoreError = true;
          this.updateLayers();
          let that = this;
          setTimeout(function(){ 
            that.t2.ignoreError = false;
            that.updateLayers();
            }, 400);
          
        }
        this.updateLayers();
     },
   }
  },

}

</script>

<style scoped>
  .image-selector{
    z-index: 12;
    position: absolute;
    left: 50vh;
    width: 60vh;
    height: 100%;
    overflow-y: scroll;
    background-color: azure;
  }
  .image-selector__toggle{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

.btn{
  margin: 1vh;
}

.vue-js-switch{
  margin-left: 1vh;
}

h2 {
  margin-top: 3vh;
}

</style>  