<template>
 <div class = "tool-menu">
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <div class = "tool-menu__button-group">
      <tool-menu-button
        tooltip="Select objects"
        name="Select"
        v-bind:is-active="this.$store.state.activeTool == 'select'"
        @button-click="$store.commit('toggleTool', 'select')"
        >
         <v-icon name="mouse-pointer" scale="1.5"/>
      </tool-menu-button>
      <tool-menu-button
        tooltip="Line (roads and paths)"
        name="Line"
        v-bind:is-active="this.$store.state.activeTool == 'line'"
        @button-click="$store.commit('toggleTool', 'line')"
        >
         <simple-svg
          :filepath= "require('../../../assets/SVG/draw-line.svg')"
          
          :width="'24px'"
          :height="'24px'"
        />
         <thumbnail
          :svg-filepath= "require('../../../assets/SVG/tertiary-road.svg')"
          color="#FFFFFF"
          v-if="this.$store.state.activeLine == 'street'"
        ></thumbnail>
        <thumbnail
          :svg-filepath="require('../../../assets/SVG/line.svg')"
          color="#ECECEC"
          v-if="this.$store.state.activeLine == 'unassigned'"
        ></thumbnail>
      </tool-menu-button>
      <tool-menu-button
        tooltip="Area (residential areas, water features, and more)"
        name="Area"
        v-bind:is-active="this.$store.state.activeTool == 'area'"
        @button-click="$store.commit('toggleTool', 'area')"
        >
         <v-icon name="draw-polygon" scale="1.5"/>
        <thumbnail
          icon-name="home"
          color="#FFFF83"
          v-if="this.$store.state.activeArea == 'residential'"
        ></thumbnail>
        <thumbnail
          icon-name="map-marker-alt"
          color="#ECECEC"
          v-if="this.$store.state.activeArea == 'unassigned'"
        ></thumbnail>
    <thumbnail
      icon-name="industry"
       
        color="#ada5d7"
     
          v-if="this.$store.state.activeArea == 'industry'"
        ></thumbnail>












      </tool-menu-button>
    </div>
     <div class = "tool-menu__button-group">
        <tool-menu-button
          tooltip="Add a comment"
          name="Comment"
          v-bind:is-active="this.$store.state.activeTool == 'comment'"
          @button-click="$store.commit('toggleTool', 'comment')"
          >
          <v-icon name="comment-dots" scale="1.5"/>
        </tool-menu-button>
        <tool-menu-button
        tooltip="Import image"
        name="Image"
        v-bind:is-active="this.$store.state.activeTool == 'image'"
        @button-click="$store.commit('toggleTool', 'image')"
        >
         <v-icon name="image" scale="1.5"/>
      </tool-menu-button>
    </div>
  </div>
</template>

<script>
import ToolMenuButton from './ToolMenuButton.vue'
import Thumbnail from './Thumbnail.vue'
export default {
  name: 'TopMenu',
  components: {
    ToolMenuButton,
    Thumbnail
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
  .tool-menu{
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    border-right: solid 1px;
    border-color: #e9ecef;
    z-index: 10;
  }
  .tool-menu__button-group{
    display: flex;
    flex-direction: column; 
    padding-bottom: 0;
  }
  
  button{
      padding: 0 !important;
      color: white !important;
    }

</style>