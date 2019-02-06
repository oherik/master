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
  <div class = "area-menu__choices">
  
  
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
        icon-name="plane"
        name="Air traffic"
        tooltip="Air strips, air ports, and related buildings and areas"
        color="#e6e6e6"
        v-bind:is-active="this.$store.state.activeArea == 'air'"
        @button-click="$store.commit('setActiveArea', 'air')"
        >
      </choice> 

       <choice
        icon-name="cross"
        name="Burial"
        tooltip="Areas for cemetaries, memorials, et cetera"
        color="#d4f1c9"
        v-bind:is-active="this.$store.state.activeArea == 'burial'"
        @button-click="$store.commit('setActiveArea', 'burial')"
        >
      </choice> 

             <choice
        icon-name="warehouse"
        name="Business"
        tooltip="Service, storage facilities, and trade"
        color="#fdf7f0"
        v-bind:is-active="this.$store.state.activeArea == 'business'"
        @button-click="$store.commit('setActiveArea', 'business')"
        >
      </choice> 

       <choice
        icon-name="city"
        name="City center"
        tooltip="A combination of retail, service, and other central functions"
        color="#ffc44d"
        v-bind:is-active="this.$store.state.activeArea == 'center'"
        @button-click="$store.commit('setActiveArea', 'center')"
        >
      </choice>

      <choice
        icon-name="tractor"
        name="Farms and animals"
        tooltip="Areas for growing produce and other plants, as well as husbandry and animal keeping"
        color="#fff5d6"
        v-bind:is-active="this.$store.state.activeArea == 'farm'"
        @button-click="$store.commit('setActiveArea', 'farm')"
        >
      </choice> 

       <choice
        icon-name="gas-pump"
        name="Fuel"
        tooltip="A facility distributing and handling vehicle fuel"
        color="#eabe86"
        v-bind:is-active="this.$store.state.activeArea == 'fuel'"
        @button-click="$store.commit('setActiveArea', 'fuel')"
        >
      </choice> 

       <choice
        icon-name="anchor"
        name="Harbour"
        tooltip="For harbour activities"
        color="#9197c3"
        v-bind:is-active="this.$store.state.activeArea == 'harbour'"
        @button-click="$store.commit('setActiveArea', 'harbour')"
        >
      </choice> 

      
  
      <choice
        icon-name="industry"
        name="Industry"
        color="#C5ACFF"
        tooltip="Factories and other industrial facilites"
        v-bind:is-active="this.$store.state.activeArea == 'industry'"
        @button-click="$store.commit('setActiveArea', 'industry')"
        has-collapsible
        >

        <template v-slot:collapsible>
          <h1>Here might be a page title</h1>
        </template>
      </choice>

          <choice
        icon-name="plus-square"
        name="Medical care"
        color="#FFA0AF"
        tooltip="Hospitals and medical facilities"
        v-bind:is-active="this.$store.state.activeArea == 'hospital'"
        @button-click="$store.commit('setActiveArea', 'hospital')"
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
        icon-name="campground"
        name="Outdoor activities"
        tooltip="Areas for running, swimming, camping, et cetera"
        color="#b1fdc6"
        v-bind:is-active="this.$store.state.activeArea == 'campground'"
        @button-click="$store.commit('setActiveArea', 'campground')"
        >
      </choice>



      <choice
        icon-name="tree"
        name="Park and nature"
        color="#C7D79E"
        tooltip="A park or nature area"
        v-bind:is-active="this.$store.state.activeArea == 'park'"
        @button-click="$store.commit('setActiveArea', 'park')"
        >
      </choice>

        <choice
        icon-name="parking"
        name="Parking"
        tooltip="Vehicle parking"
        color="#b1bffd"
        v-bind:is-active="this.$store.state.activeArea == 'parking'"
        @button-click="$store.commit('setActiveArea', 'parking')"
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
        name="Retail"
        tooltip="Predominately shops or stores"
        color="#FFD88A"
        v-bind:is-active="this.$store.state.activeArea == 'retail'"
        @button-click="$store.commit('setActiveArea', 'retail')"
        >
      </choice>

      
      <choice
        icon-name="graduation-cap"
        name="School"
        color="#FF9E8D"
        tooltip="Schools, kindergartens, and more"
        v-bind:is-active="this.$store.state.activeArea == 'education'"
        @button-click="$store.commit('setActiveArea', 'education')"
        >
      </choice>

      

       <choice
        icon-name="cogs"
        name="Technical facilities"
        tooltip="Production and distribution, and handling of electricity, television signals, among others"
        color="#facc12"
        v-bind:is-active="this.$store.state.activeArea == 'tech'"
        @button-click="$store.commit('setActiveArea', 'tech')"
        >
      </choice> 

       <choice
        icon-name="concierge-bell"
        name="Temporary stay"
        tooltip="Hotels, hostels, et cetera"
        color="#b1b7fd"
        v-bind:is-active="this.$store.state.activeArea == 'temp'"
        @button-click="$store.commit('setActiveArea', 'temp')"
        >
      </choice> 

       <choice
        icon-name="car-side"
        name="Traffic"
        tooltip="Buildings for storing emergency vehicles, railroad areas, et cetera"
        color="#8c8c8c"
        v-bind:is-active="this.$store.state.activeArea == 'traffic'"
        @button-click="$store.commit('setActiveArea', 'traffic')"
        >
      </choice> 
    

<choice
        icon-name="table-tennis"
        name="Visitor complex"
        tooltip="For example churches, sport facilities and other facilities made for visitors"
        color="#ee718e"
        v-bind:is-active="this.$store.state.activeArea == 'visit'"
        @button-click="$store.commit('setActiveArea', 'visit')"
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
    
    z-index: 10;
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
      
      width: 4vh;
      height: 4vh;
    width: 4vh;
  }

  .area-menu__search-input{
     padding-right: 4vh !important;
  }
  
  .area-menu__choices{
      width: 100%;
      overflow-y: scroll;
  }

</style>