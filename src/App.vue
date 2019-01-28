<template>



  <div id="app">
    <b-container fluid class="main-container">
      <b-row>
        <b-col>
          <top-menu></top-menu>
        </b-col>
      </b-row>
      <b-row class = "bottom-row">
        <b-col>
          <div class = "menu-overlay">
              <b-row>
              <b-col md="auto">
                <tool-menu></tool-menu>
              </b-col>
              <b-col 
                md="2"
                v-if="this.$store.state.activeTool == 'line'
                || this.$store.state.activeTool == 'area'
                || this.$store.state.activeTool == 'image'
              
              ">
                <type-menu></type-menu>
              </b-col>
              </b-row>
          </div>
          <div class = "background">
            <img alt="Vue logo" src="./assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
          </div>
          <map-buttons></map-buttons>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/top-menu/TopMenu.vue'
import ToolMenu from './components/tool-menu/ToolMenu.vue'
import TypeMenu from './components/type-menu/TypeMenu.vue'
import MapButtons from './components/map-buttons/MapButtons.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TopMenu,
    ToolMenu,
    TypeMenu,
    MapButtons
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  #app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .bottom-row{
    height: 92vh;
  }
  .main-container{
    padding: 0;
    margin: 0;
  }
  .menu-overlay{
    width: 100%;
    position: absolute;
    left: 1vh;
    top: 0;
    width: 100%;
  }
  .col{
    padding: 0 !important;
  }
  .col-md-auto{
    padding: 0 !important;
  }
  .col-md-2{
    padding: 0 !important;
  }
</style>
