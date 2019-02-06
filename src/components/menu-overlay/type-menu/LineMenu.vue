<template>
 <div class = "line-menu">
   <div class="line-menu__search">
      <b-form-input v-model="searchString"
                  type="search"
                   class = "line-menu__search-input"
                  placeholder="Search line type..."></b-form-input>
      <v-icon name="search"
        class = "line-menu__search-icon"
        scale="1.5"/>
  </div>
  
  
      <choice
        name="Unassigned line"
        color="#ECECEC"
        tooltip="A general line"
        v-bind:is-active="this.$store.state.activeLine == 'unassigned'"
        @button-click="$store.commit('setActiveLine', 'unassigned')"
        >
        <simple-svg
          :filepath= "require('../../../assets/SVG/line.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
      <choice
        name="Road"
        color="#FFC63F"
        tooltip="A road, often connecting cities"
        v-bind:is-active="this.$store.state.activeLine == 'road'"
        @button-click="$store.commit('setActiveLine', 'road')"
        >
        <simple-svg
          :filepath= "require('../../../assets/SVG/road-secondary.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
      <choice
        name="Street"
        color="#FFFFFF"
        tooltip="An urban street"
        v-bind:is-active="this.$store.state.activeLine == 'street'"
        @button-click="$store.commit('setActiveLine', 'street')"
        >
           <simple-svg
          :filepath= "require('../../../assets/SVG/tertiary-road.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
















      <!--
      <choice
        name="Highway"
        color="#FF5555"
        tooltip="A highway with divided lanes"
        v-bind:is-active="this.$store.state.activeLine == 'highway'"
        @button-click="$store.commit('setActiveLine', 'highway')"
        >
        <simple-svg
          :filepath= "require('../../assets/SVG/highway.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>-->
      <!--
      <choice
        name="Primary road"
        color="#FFC63F"
        tooltip="A larger road, connecting cities"
        v-bind:is-active="this.$store.state.activeLine == 'primary-road'"
        @button-click="$store.commit('setActiveLine', 'primary-road')"
        >
        <simple-svg
          :filepath= "require('../../../assets/SVG/road-secondary.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
      <choice
        name="Secondary road"
        color="#FFFC99"
        tooltip="A smaller road, connecting cities or towns"
        icon-name="road"
        v-bind:is-active="this.$store.state.activeLine == 'secondary-road'"
        @button-click="$store.commit('setActiveLine', 'secondary-road')"
        >
      </choice>
      <choice
        name="Tertiary road"
        color="#FFFFFF"
        tooltip="A smaller road, for example linking urban areas"
        v-bind:is-active="this.$store.state.activeLine == 'tertiary-road'"
        @button-click="$store.commit('setActiveLine', 'tertiary-road')"
        >
        <simple-svg
          :filepath= "require('../../../assets/SVG/tertiary-road.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
      -->
      <!--
      <choice
        name="Residential street"
        color="#FFFFFF"
        tooltip="For example a city street without dividers"
        v-bind:is-active="this.$store.state.activeLine == 'street'"
        @button-click="$store.commit('setActiveLine', 'street')"
        >
        <simple-svg
          :filepath= "require('../../assets/SVG/street.svg')"
          :width="'24px'"
          :height="'24px'"
        />
      </choice>
      -->
      <choice
        name="Bicycle path"
        color="#7191FF"
        tooltip="A path made for bicycles and similar vehicles"
        icon-name="bicycle"
        v-bind:is-active="this.$store.state.activeLine == 'bicycle'"
        @button-click="$store.commit('setActiveLine', 'bicycle')"
        >
      </choice>
      <choice
        name="Pedestrian path"
        color="#DDD4BD"
        tooltip="A path for walking pedestrians"
        icon-name="walking"
        v-bind:is-active="this.$store.state.activeLine == 'pedestrian'"
        @button-click="$store.commit('setActiveLine', 'pedestrian')"
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
  .line-menu{
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    
    z-index: 10;
  }

   .line-menu__search{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .line-menu__search-icon{
      right: 0px;
      position: absolute;
      padding: 1vh;
      pointer-events: none;
      height: 100%;
      width: 4vh;
  }

  .line-menu__search-input{
     padding-right: 4vh !important;
  }
  
  

</style>