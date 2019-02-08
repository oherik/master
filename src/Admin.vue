<template>



  <div id="admin">
    <b-container fluid class="main-container">
      <b-row>
        <b-col>
          <top-menu></top-menu>
        </b-col>
      </b-row>
      <b-row class = "bottom-row">
        <b-col>
          <menu-overlay></menu-overlay>
          <image-selector></image-selector>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopMenu from './components/top-menu/TopMenu.vue'
import MenuOverlay from './components/menu-overlay/MenuOverlay.vue'
import ImageSelector from './components/image-selector/ImageSelector.vue'

export default {
  name: 'admin',
  components: {
    TopMenu,
    MenuOverlay,
    ImageSelector
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  #admin {
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
