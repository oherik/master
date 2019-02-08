<template>



  <div id="client">
    <b-container fluid class="main-container">
      <b-row>
        <b-col>
          <top-menu></top-menu>
        </b-col>
      </b-row>
      <b-row class = "bottom-row">
        <b-col>
         





          <menu-overlay></menu-overlay>
          <background-map></background-map>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopMenu from './components/top-menu/TopMenu.vue'
import MenuOverlay from './components/menu-overlay/MenuOverlay.vue'
import BackgroundMap from './components/background/BackgroundMap.vue'

export default {
  name: 'client',
  components: {
    TopMenu,
    MenuOverlay,
    BackgroundMap,
  },
  
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  mounted() {
    this.toggleBodyClass('addClass', 'mb-0');
  },
  destroyed() {
    this.toggleBodyClass('removeClass', 'mb-0');
  }

}

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  .mb-0{
    overflow: hidden;
  }

  #client {
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
