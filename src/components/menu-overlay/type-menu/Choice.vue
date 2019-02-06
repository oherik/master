<template>
  <div class = "choice"
    @click="$emit('button-click')"
    v-bind:class="{
      'choice--active': isActive
    }">
    <div class = "choice__left">
      <div class = "choice__image"
        v-bind:style="{ backgroundColor: color }">
        <v-icon :name="iconName" scale="1.5" v-if="iconName"/>
        <slot v-if="!iconName"></slot>
      </div>
      <div class = "choice__text">
        {{name}}
      </div>
    </div>
     <v-icon name="info-circle"
      scale="1.5"
      v-b-tooltip.hover.right.viewport :title = "tooltip"
      class = "choice__tooltip-icon"/>

  </div>
</template>

<script>
export default {
  name: 'Choice',
  props: {
    name: String,
    iconName: String,
    color: String,
    isActive: Boolean,
    tooltip: String,
  },
  computed: {
    },
    methods: {
    }
}
</script>

<style>
  .choice{
    border: solid 1px;
    border-color: #e9ecef;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color:white;
    
  }
  .choice:hover{
    background: #03A9F430;
    -webkit-transition: background 0.1s linear;
    -moz-transition: background 0.1s linear;
    -o-transition: background 0.1s linear;
    -ms-transition: background 0.1s linear;
    transition: background 0.1s linear;
    cursor: pointer;
  }
  .choice--active{
    background: #03A9F480;
  }
  .choice--active:hover{
    background: #03A9F480;
    cursor: pointer;
  }

  .choice__left{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .choice__tooltip-icon{
    width: 4vh;
    color:rgba(0,0,0,0.6);
  }

  .choice__tooltip-icon:hover{
    color: #03A9F4;
    -webkit-transition: background 0.1s linear;
    -moz-transition: background 0.1s linear;
    -o-transition: background 0.1s linear;
    -ms-transition: background 0.1s linear;
    transition: background 0.1s linear;
    cursor: pointer;
  }
  
  .choice__image{
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

  .choice__text{

  }
    
    

</style>