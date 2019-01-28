<template>
 <div class = "area-menu">
   <div class="area-menu__search">
      <b-form-input v-model="searchString"
                  type="search"
                   class = "area-menu__search-input"
                  placeholder="Search area type..."></b-form-input>
      <v-icon name="search"
        class = "area-menu__search-icon"
        scale="1.5"/>
  </div>
  
  
      <choice
        icon-name="map-marker-alt"
        name="Unassigned area"
        color="#ECECEC"
        tooltip="A general area"
        v-bind:is-active="this.$store.state.activeArea == 'unassigned'"
        @button-click="$store.commit('setActiveArea', 'unassigned')"
        >
      </choice>

      <choice
        icon-name="graduation-cap"
        name="Education"
        color="#FF9E8D"
        tooltip="Schools, kindergartens, and more"
        v-bind:is-active="this.$store.state.activeArea == 'education'"
        @button-click="$store.commit('setActiveArea', 'education')"
        >
      </choice>
      <choice
        icon-name="plus-square"
        name="Hospital"
        color="#FFA0AF"
        tooltip="Hospitals and medical facilities"
        v-bind:is-active="this.$store.state.activeArea == 'hospital'"
        @button-click="$store.commit('setActiveArea', 'hospital')"
        >
      </choice>
      <choice
        icon-name="industry"
        name="Industry"
        color="#C5ACFF"
        tooltip="Factories and other industrial facilites"
        v-bind:is-active="this.$store.state.activeArea == 'industry'"
        @button-click="$store.commit('setActiveArea', 'industry')"
        >
      </choice>
      <choice
        icon-name="briefcase"
        name="Offices"
        color="#D1BAAB"
        tooltip="Predominately office buildings"
        v-bind:is-active="this.$store.state.activeArea == 'commercial'"
        @button-click="$store.commit('setActiveArea', 'commercial')"
        >
      </choice>
      <choice
        icon-name="tree"
        name="Park"
        color="#C7D79E"
        tooltip="A park"
        v-bind:is-active="this.$store.state.activeArea == 'park'"
        @button-click="$store.commit('setActiveArea', 'park')"
        >
      </choice>
      <choice
        icon-name="home"
        name="Residential area"
        tooltip="Predominately houses or apartments"
        color="#FFFF83"
        v-bind:is-active="this.$store.state.activeArea == 'residential'"
        @button-click="$store.commit('setActiveArea', 'residential')"
        >
      </choice>
      <choice
        icon-name="shopping-cart"
        name="Retail area"
        tooltip="Predominately shops or stores"
        color="#FFD88A"
        v-bind:is-active="this.$store.state.activeArea == 'retail'"
        @button-click="$store.commit('setActiveArea', 'retail')"
        >
      </choice>
      <choice
        icon-name="water"
        name="Water"
        color="#DBE8FF"
        tooltip="A water body, such as a pond, lake, or canal"
        v-bind:is-active="this.$store.state.activeArea == 'water'"
        @button-click="$store.commit('setActiveArea', 'water')"
        >
      </choice>
  </div>
</template>

<script>
import Choice from './Choice.vue'

export default {
  name: 'AreaMenu',
  components: {
    Choice,
  },
  computed: {
      
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
   
  }
}
//f8fbfc
//#03A9F4
</script>

<style>
  .area-menu{
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

   .area-menu__search{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .area-menu__search-icon{
      right: 0px;
      position: absolute;
      padding: 1vh;
      pointer-events: none;
      height: 100%;
      width: 4vh;
  }

  .area-menu__search-input{
     padding-right: 4vh !important;
  }
  
  

</style>