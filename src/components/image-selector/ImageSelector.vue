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
     <h2>Task 2 (Lerum, varning)</h2>
     <b-button-group vertical>
      <b-button :variant="'primary'" @click="resetTask(2)"> Go to task 2 </b-button>
    </b-button-group>
    <div class = "image-selector__toggle">
      Toggle error message
      <toggle-button v-model="t2.displayErrorMessage" :sync="true"/>
    </div>
    <div class = "image-selector__toggle">
    <!--  Ignore error
      <toggle-button v-model="t2.ignoreError" :sync="true"/>-->
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
    <div class = "image-selector__toggle">
      Toggle error message
      <toggle-button v-model="t3.displayErrorMessage" :sync="true"/>
    </div>
    <div class = "image-selector__toggle">
     <!--  Ignore error
      <toggle-button v-model="t3.ignoreError" :sync="true"/> -->
    </div>
    <b-button-group vertical>
      <b-button @click="t3ViewAnalysis"> Visa analys </b-button>
      <b-button @click="t3SelectArea"> Select </b-button>
      <b-button @click="t3Deselect"> Deselect </b-button>
      <b-button @click="t3Move"> Move </b-button>
    </b-button-group>

<!-- 
   __________________________TASK 4_______________________________
-->

 <h2>Task 4 (Kommentar)</h2>
    <b-button-group vertical>
      <b-button :variant="'primary'" @click="resetTask(4)"> Go to task 4 </b-button>
      <b-button @click="t4SelectArea"> Select </b-button>
      <b-button @click="t4Deselect"> Deselect </b-button>
    </b-button-group>
    <div class = "image-selector__toggle">
      Infoklick
      <toggle-button v-model="t4.infoClick" :sync="true"/>
    </div>
    <b-button @click="t4Comment"> Ny kommentar </b-button>
    <b-button @click="t4WriteComment"> Skriver något </b-button>
    <b-button @click="t4CancelComment"> Avbryt </b-button>
    <b-button @click="t4SaveComment"> Spara </b-button>
    <div class = "image-selector__toggle">
      Högerklick
      <toggle-button v-model="t4.rightClick" :sync="true"/>
    </div>
     <b-button-group vertical>
      <b-button @click="t4CommentPopup"> Klick på kommentar </b-button>
      <b-button @click="t4CancelCommentPopup"> Cancel kommentarpopup </b-button>
      <b-button @click="t4WriteComment"> Skriver något </b-button>
      <b-button @click="t4SavePopupComment"> Sparar kommentar </b-button>
    </b-button-group>

    <div class = "image-selector__toggle">
      Kommentartoggle
      <toggle-button v-model="t4.showComment" :sync="true"/>
    </div>
    
<!-- 
   __________________________TASK 5_______________________________
-->

 <h2>Task 4 (Kommentar)</h2>
    <b-button-group vertical>
      <b-button :variant="'primary'" @click="resetTask(5)"> Go to task 5 </b-button>
    </b-button-group>

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
      /*
      this.$store.commit("setActiveLine", "street");
      let that = this;
      setTimeout(function(){that.$store.commit("setActiveTool", "line");}, 300);
      */
      this.t2.streetSelected = true;
    },
    t2Deselect(){
      this.t2.streetSelected = false;
    },
    t3ViewAnalysis(){
      let that = this;
      
     
      that.$store.commit("mergeWithState",
        {
          analysis: "Flooding",
          activeLayerMenu: "analysis",
        }
      );
      
      setTimeout(function(){
         that.t3.displayErrorMessage = false;
      }, 150);
    },
    t3SelectArea(){
      /*
      this.$store.commit("mergeWithState",
        {
          activeTool: "area",
          activeArea: "residential",
        }
      );
      */
      this.t3.areaSelected = true;
    },
    t3Deselect(){
      this.t3.areaSelected = false;
    },
    t3Move(){
      this.t3.areaMoved = true;
    },
    t4Deselect(){
      this.t4.infoClick = false;
      this.t4.areaSelected = false;
    },
     t4SelectArea(){
       /*
      this.$store.commit("mergeWithState",
        {
          activeTool: "area",
          activeArea: "residential",
        }
      );
      */
      this.t4.areaSelected = true;
    },
    t4CommentPopup(){
      this.t4.rightClick = false;
      this.t4.commentPopup = true;
      this.t4.areaSelected = true;
      this.t4.isWriting = true;
      this.t4.showKeyboard = true;
    },
    t4CancelCommentPopup(){
      this.t4.commentPopup = false;
      this.t4.areaSelected = false;
      this.t4.isWriting = false;
      this.t4.showKeyboard = false;
    },
    t4Comment(){
      this.t4.isWriting = true;
      this.t4.showKeyboard = true;
    },
    t4WriteComment(){
      this.t4.hasWritten = true;
      this.t4.showKeyboard = true;
    },
    t4CancelComment(){
      this.t4.isWriting = false;
      this.t4.hasWritten = false;
      this.t4.showKeyboard = false;
    },
    t4SaveComment(){
      this.t4.saved = true;
      this.t4.showKeyboard = false;
    },
    t4SavePopupComment(){
       this.t4.saved = true;
       this.t4.areaSelected = false;
       this.t4.commentPopup = false;
      this.t4.showKeyboard = false;
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
              analysis: "",
              activeSketchId: 0,
              overlayLayers: [],
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
              activeSketchId: 0,
              overlayLayers: [],
            }
          );
          break;
        case 3:
          this.t3 = {
            displayErrorMessage: false,
            ignoreError: false,
            areaSelected: false,
            areaDeleted: false,
            areaMoved: false,
          };
          this.$store.commit("mergeWithState",
            {
              backgroundImage: "klar.png",
              backgroundTopography: "klar-topography.png",
              activeTool: "select",
              activeLine: "unassigned",
              activeArea: "unassigned",
              streetType: null,
              activeMode: "sketch",
              activeSketchId: 1,
              overlayLayers: [],
            }
          );
          break;
        case 4:
          this.t4 = {
            rightClick: false,
            commentPopup: false,
            isWriting: false,
            hasWritten: false,
            saved: false,
            areaSelected: false,
            infoClick: false,
            showKeyboard: false,
            showComment: false,
          }
           this.$store.commit("mergeWithState",
            {
              backgroundImage: "klar.png",
              backgroundTopography: "klar-topography.png",
              activeTool: "select",
              activeLine: "unassigned",
              activeArea: "unassigned",
              activeMode: "sketch",
              activeSketchId: 1,
              overlayLayers: [],
              analysis: "",
              activeLayerMenu: "",
            }
          );
          break;
        case 5:
          this.t5 = {
          }
           this.$store.commit("mergeWithState",
            {
              backgroundImage: "klar.png",
              backgroundTopography: "klar-topography.png",
              activeTool: "select",
              activeLine: "unassigned",
              activeArea: "unassigned",
              activeMode: "sketch",
              activeSketchId: 1,
              overlayLayers: [],
              analysis: "",
              activeLayerMenu: "",
            }
          );
          break;
      }
      this.activeTask = number;
    },
    setTopButtons(){
      switch(this.activeTask){
        
        case 1:
          this.$store.commit("setActiveCopy", this.t1.areaSelected ||this.t1.streetSelected);
          break;
        case 2:
          this.$store.commit("setActiveCopy", this.t2.streetSelected);
          break;
        case 3:
          this.$store.commit("setActiveCopy", this.t3.areaSelected);
          break;
        case 4:
           this.$store.commit("setActiveCopy", this.t4.areaSelected);
          break;
        case 5:
          
          break;
      }
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
      let that = this;
          setTimeout(function(){ 
            that.setTopButtons();
            }, 50);
 
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
      let newBackground = [];
      let newOverlay = [];
      let isWrongStreetType = this.streetType != "Industry street";
      newBackground.push("lerum__area.png");
      if(isWrongStreetType){
        newBackground.push("lerum__street--local.png");
      }else{
        newBackground.push("lerum__street.png");
      }
      
      if(isWrongStreetType && !this.t2.ignoreError){
        if(this.t2.displayErrorMessage){
          newOverlay.push("lerum__street--warning.png");
           if(this.t2.streetSelected){
              newOverlay.push("lerum__street--selection.png");
            }
          newOverlay.push("lerum__warning-message.png");
        }else{
          newOverlay.push("lerum__street--warning.png");
           if(this.t2.streetSelected){
            newOverlay.push("lerum__street--selection.png");
          }
        }
      }
     
      this.$store.commit("mergeWithState",
            {
              imageLayers: newBackground,
              overlayLayers: newOverlay,
            }
          );
     },

     updateT3Layers(){
      let newBackground = ["klar__sketch.png"];
      let newOverlay = [];
      if(!this.t3.areaMoved && !this.t3.areaDeleted){
        newBackground.push("klar__area.png");
        
        if(!this.t3.ignoreError){
          if(this.t3.displayErrorMessage){
            newOverlay.push("klar__area--warning.png");
            newOverlay.push("klar__warning-message.png");
          }else{
            newOverlay.push("klar__area--warning.png");
          }
         
        }
        if(this.t3.areaSelected){
          newOverlay.push("klar__area--selection.png");
        }
      } 
      if(this.t3.areaMoved){
        newBackground.push("klar__area-moved.png");
        if(this.t3.areaSelected){
          newOverlay.push("klar__area-moved--selection.png");
        }
      }
      this.$store.commit("mergeWithState",
            {
              imageLayers: newBackground,
              overlayLayers: newOverlay,
            }
          );
     },
     updateT4Layers(){
      let newBackground = ["klar__sketch.png", "klar__area-moved.png"];
      let newOverlay = [];
      if(this.t4.areaSelected){
        newOverlay.push("klar__area-moved--selection.png");
      }
      
      if(this.t4.rightClick){
        newOverlay.push("klar__right-click.png");
      }
      if(this.t4.commentPopup){
        if(this.t4.hasWritten){
          if(this.t4.saved){
            //newOverlay.push("klar__right-click.png");
          } else {
            newOverlay.push("klar__add-comment--written.png");
          }
        } else {
          newOverlay.push("klar__add-comment.png");
        }
      }

      if(this.t4.infoClick){
        if(this.t4.isWriting){
          if(this.t4.hasWritten){
            if(this.t4.saved){
              newOverlay.push("klar__area-info--commented.png");
            } else {
              newOverlay.push("klar__area-info--written.png");
            }
          }else{
            newOverlay.push("klar__area-info--writing.png");
          }
        } else {
          newOverlay.push("klar__area-info.png");
        }
      }

      if(this.t4.showKeyboard){
        newOverlay.push("keyboard.png");
      }

      if(this.t4.saved && !this.t4.infoClick && !this.t4.areaSelected){
        if(this.t4.showComment){
          newOverlay.push("klar__comment-popup.png");
        }
        newBackground.push("klar__with-comment.png");
      }

      this.$store.commit("mergeWithState",
            {
              imageLayers: newBackground,
              overlayLayers: newOverlay,
            }
          );
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
   t4: {
     handler: function () {
       this.updateLayers();
     },
    deep: true,
   },
   t5: {
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