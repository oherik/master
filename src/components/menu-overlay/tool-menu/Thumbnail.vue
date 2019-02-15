<template>
  
        <div class = "thumbnail__image"
          v-bind:style="{ backgroundColor: color }">
          <v-icon :name="iconName" scale="1" v-if="iconName"/>
          <simple-svg v-if="svgFilepath"
            :filepath="svgFilepath"
            :width="'16px'"
            :height="'16px'"
          ></simple-svg>
      </div>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    iconName: String,
    color: String,
    svgFilepath: String,
  },
  computed: {
    },
    methods: {
    }
}
</script>

<style>

  .thumbnail__image{
    position: absolute;
    right: 0vh;
    bottom: 0vh;
        border: solid 1px;
    border-color: #dedede;
    width: 2.5vh;
    height: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thumbnail-wrapper{
        margin-top: 0vh;
  }
    

</style>