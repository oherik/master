<template>
  <div class = "item-wrapper">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <div class = "item">
        
      <div class = "item__left">
        <span class="fa-stack fa-2x">
          <i class="far fa-square fa-stack-2x"></i>
          <i class="fas fa-eye fa-stack-1x"></i>
        </span>
        <div class = "item__image"
          v-bind:style="{ backgroundColor: color }">
          <v-icon :name="iconName" scale="1.5" v-if="iconName"/>
          <simple-svg v-if="svgFilepath"
            :filepath="svgFilepath"
            :width="'24px'"
            :height="'24px'"
          ></simple-svg>
        </div>
        <div class = "item__text">
          {{name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayerItem',
  props: {
    name: String,
    iconName: String,
    color: String,
    tooltip: String,
    svgFilepath: String,
  },
  computed: {
    },
    methods: {
    }
}
</script>

<style scoped>
  .item{
    border: solid 1px;
    border-color: #e9ecef;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color:white;
    
  }


  .item__left{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  
  .item__image{
     border: solid 1px;
    border-color: #e9ecef;
    width: 4vh;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1vh;
    margin: 1vh;
  }

  .item__text{

  }
    
  .item-wrapper{
    margin-top: 0vh;
  }
  
  .fa-stack{
    font-size: 1em;
    color: rgba(0,0,0,0.87);
  }

</style>