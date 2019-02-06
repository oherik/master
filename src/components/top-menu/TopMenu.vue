<template>
 <div class = "top-menu">
    <div class = "top-menu__button-group">
      <b-dropdown  variant="link" no-caret class = "dropdown-button">
         <template slot="button-content">
            <top-menu-button
              name="Menu"
              v-bind:is-active="false"
              >
                <v-icon name="bars" scale="1.5"/>
              </top-menu-button>
          </template>
        <b-dropdown-item href="#">New sketch</b-dropdown-item>
        <b-dropdown-item href="#">Browse sketches</b-dropdown-item>
        <b-dropdown-item href="#">Recent sketches <v-icon name="caret-right" scale="1"/></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Export sketch</b-dropdown-item>
        <b-dropdown-item href="#">Rename sketch</b-dropdown-item>
        <b-dropdown-item href="#">Sketch versions <v-icon name="caret-right" scale="1"/></b-dropdown-item>
         <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Support</b-dropdown-item>
      </b-dropdown>
      <div class = "top-menu__sketch-name-bar">
        {{this.$store.getters.activeSketchName}}
      </div>
    </div>

     <div class = "top-menu__button-group">
        <top-menu-button
        name="Sketch"
        v-bind:is-active="this.$store.state.activeMode == 'sketch'"
        @button-click="$store.commit('setActiveMode', 'sketch')"
        >
          <v-icon name="edit" scale="1.5"/>
        </top-menu-button>
      <top-menu-button
        name="Analyze"
        v-bind:is-active="this.$store.state.activeMode == 'analysis'"
        @button-click="$store.commit('setActiveMode', 'analysis')"
        >
          <v-icon name="chart-pie" scale="1.5"/>
        </top-menu-button>

    </div>

     <div class = "top-menu__button-group">
         <top-menu-button
      name="Copy"
      v-bind:is-active="false"
      v-bind:is-disabled="!this.$store.state.activeCopy"
      >
        <v-icon name="copy" scale="1.5"/>
    </top-menu-button>
    <top-menu-button
      name="Paste"
      v-bind:is-active="false"
      v-bind:is-disabled="!this.$store.state.activePaste"
      >
        <v-icon name="paste" scale="1.5"/>
    </top-menu-button>
      <top-menu-button
      name="Undo"
      v-bind:is-active="false"
      v-bind:is-disabled="!this.$store.state.activeUndo"
      >
        <v-icon name="undo" scale="1.5"/>
      </top-menu-button>
    <top-menu-button
      name="Redo"
      v-bind:is-active="false"
      v-bind:is-disabled="!this.$store.state.activeRedo"
      >
        <v-icon name="redo" scale="1.5"/>
    </top-menu-button>
  

    </div>
  </div>
</template>

<script>
import TopMenuButton from './TopMenuButton.vue'

export default {
  name: 'TopMenu',
  components: {
    TopMenuButton,
  },
  computed: {
      
  },
  methods: {
   
  }
}
//f8fbfc
//#03A9F4
</script>

<style scoped>
  .top-menu{
    background: #284a5a; 
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between
    
  }
  .top-menu__button-group{
    display: flex;
    flex-direction: row;
  }
  .top-menu__sketch-name-bar{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5em;
    padding-left: 5vh;
    padding-right: 5vh;
  }

  .dropdown-item
    svg{
      margin-left: 1vh;
    
  }

  button{
      padding: 0 !important;
      color: white !important;
    }
  
</style>
<style>
.btn-link{
     padding: 0 !important;
      color: white !important;
  }
</style>