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
  <div class = "area-menu__choices" >
  
  
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
        color="#eca9ed"
        v-bind:is-active="this.$store.state.activeArea == 'burial'"
        @button-click="$store.commit('setActiveArea', 'burial')"
        >
      </choice> 

             <choice
        icon-name="warehouse"
        name="Business"
        tooltip="Service, storage facilities, and trade"
        color="#fdeca6"
        v-bind:is-active="this.$store.state.activeArea == 'business'"
        @button-click="$store.commit('setActiveArea', 'business')"
        >
      </choice> 

       <choice
        icon-name="city"
        name="City center"
        tooltip="A combination of retail, service, and other central functions"
        color="#cfaa95"
        v-bind:is-active="this.$store.state.activeArea == 'center'"
        @button-click="$store.commit('setActiveArea', 'center')"
        >
      </choice>

      <choice
        icon-name="tractor"
        name="Farms and animals"
        tooltip="Areas for growing produce and other plants, as well as husbandry and animal keeping"
        color="#bff1ab"
        v-bind:is-active="this.$store.state.activeArea == 'farm'"
        @button-click="$store.commit('setActiveArea', 'farm')"
        >
      </choice> 

       <choice
        icon-name="gas-pump"
        name="Fuel"
        tooltip="A facility distributing and handling vehicle fuel"
        color="#d3d3d3"
        v-bind:is-active="this.$store.state.activeArea == 'fuel'"
        @button-click="$store.commit('setActiveArea', 'fuel')"
        >
      </choice> 

       <choice
        icon-name="anchor"
        name="Harbour"
        tooltip="For harbour activities"
        color="#bfbfbf"
        v-bind:is-active="this.$store.state.activeArea == 'harbour'"
        @button-click="$store.commit('setActiveArea', 'harbour')"
        >
      </choice> 

      
  
      <choice
        icon-name="industry"
        name="Industry"
        color="#ada5d7"
        tooltip="Factories and other industrial facilites"
        v-bind:is-active="this.$store.state.activeArea == 'industry'"
        @button-click="$store.commit('setActiveArea', 'industry')"
        has-collapsible
        >
        <div class = "collapsible-content">
          <b-form-group id=""
                        label="Subcategory:"
                        label-for="type-industry">
            <b-form-select id="type-industry"
                          :options="industryTypes"
                          v-model="industryType">
            </b-form-select>
          </b-form-group>
        </div>
      </choice>

          <choice
        icon-name="plus-square"
        name="Medical care"
        color="#fb666c"
        tooltip="Hospitals and medical facilities"
        v-bind:is-active="this.$store.state.activeArea == 'hospital'"
        @button-click="$store.commit('setActiveArea', 'hospital')"
        >
      </choice>

      

      <choice
        icon-name="briefcase"
        name="Offices"
        color="#bd9883"
        tooltip="Predominately office buildings"
        v-bind:is-active="this.$store.state.activeArea == 'commercial'"
        @button-click="$store.commit('setActiveArea', 'commercial')"
        >
      </choice>

      
     

      <choice
        icon-name="campground"
        name="Outdoor activities"
        tooltip="Areas for running, swimming, camping, et cetera"
        color="#6df493"
        v-bind:is-active="this.$store.state.activeArea == 'campground'"
        @button-click="$store.commit('setActiveArea', 'campground')"
        >
      </choice>



      <choice
        icon-name="tree"
        name="Park and nature"
        color="#98CE51"
        tooltip="A park or nature area"
        v-bind:is-active="this.$store.state.activeArea == 'park'"
        @button-click="$store.commit('setActiveArea', 'park')"
        >
      </choice>

        <choice
        icon-name="parking"
        name="Parking"
        tooltip="Vehicle parking"
        color="#e1e1e1"
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
                has-collapsible
        >
        <div class = "collapsible-content">
          <b-form-group id="exampleInputGroup3"
                        label="Subcategory:"
                        label-for="type-residential">
            <b-form-select id="type-residential"
                          :options="residentialTypes"
                          v-model="residentialType">
            </b-form-select>
          </b-form-group>
          <b-form-group id="exampleInputGroup4"
                        label="Average number of stories:"
                        label-for="stories-residential">


                        <number-input id="stories-residential" v-model="residentialStories" :min="1" :max="200" center controls></number-input>
          </b-form-group>
        </div>
      </choice>
      
      
        

       
      <choice
        icon-name="shopping-cart"
        name="Retail"
        tooltip="Predominately shops or stores"
        color="#efa77d"
        v-bind:is-active="this.$store.state.activeArea == 'retail'"
        @button-click="$store.commit('setActiveArea', 'retail')"
        >
      </choice>

      
      <choice
        icon-name="graduation-cap"
        name="School"
        color="#fb8084"
        tooltip="Schools, kindergartens, and more"
        v-bind:is-active="this.$store.state.activeArea == 'education'"
        @button-click="$store.commit('setActiveArea', 'education')"
        >
      </choice>

      

       <choice
        icon-name="cogs"
        name="Technical facilities"
        tooltip="Production and distribution, and handling of electricity, television signals, among others"
        color="#9d9ebd  "
        v-bind:is-active="this.$store.state.activeArea == 'tech'"
        @button-click="$store.commit('setActiveArea', 'tech')"
        >
      </choice> 

       <choice
        icon-name="concierge-bell"
        name="Temporary stay"
        tooltip="Hotels, hostels, et cetera"
        color="#f9bb64"
        v-bind:is-active="this.$store.state.activeArea == 'temp'"
        @button-click="$store.commit('setActiveArea', 'temp')"
        >
      </choice> 

       <choice
        icon-name="car-side"
        name="Traffic"
        tooltip="Buildings for storing emergency vehicles, railroad areas, et cetera"
        color="#b7b7b7"
        v-bind:is-active="this.$store.state.activeArea == 'traffic'"
        @button-click="$store.commit('setActiveArea', 'traffic')"
        >
      </choice> 
    

<choice
        icon-name="table-tennis"
        name="Visitor complex"
        tooltip="For example churches, sport facilities and other facilities made for visitors"
        color="#faa86f"
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
      residentialType: {
        get: function () {
          return this.$store.state.residentialType;
        },
        set: function (newValue) {
          this.$store.commit("setResidentialType", newValue);
        }
    },
    residentialStories: {
        get: function () {
          return this.$store.state.residentialHeight;
        },
        set: function (newValue) {
          this.$store.commit("setResidentialHeight", newValue);
        }
    },
    industryType: {
        get: function () {
          return this.$store.state.industryType;
        },
        set: function (newValue) {
          this.$store.commit("setIndustryType", newValue);
        }
    },
  },
  data () {
    return {
      searchString: '',
      
      residentialTypes: [
        { text: 'General residential area', value: null },
        'Apartments', 'Houses', 'Terraced houses'
      ],
      industryTypes: [
        { text: 'General industry', value: null },
        'Paper processing', 'Textiles', 'Warehouses',
      ],
    }
  },
  methods: {
   
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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

  .collapsible-content{
    text-align: left;
  }


</style>