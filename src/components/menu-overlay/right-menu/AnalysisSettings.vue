<template>
 <div v-if="this.$store.getters.showAnalysisSettings">
     
     <h3 class = "right-menu__heading">Analysis</h3>



    <div class = "right-menu__category">
      <b-form-group id=""
                        label="Show analysis overlay:"
                        label-for="type-street">
        <b-form-select id="type-analysis"
                          :options="simulations"
                          v-model="analysis">
        </b-form-select>
      </b-form-group>
       <b-form-group id=""
                        label="Overlay visibility:"
                        label-for="opacity-slider">
           <div class = "right-menu__slider" id ="opacity-slider">
          <vue-slider
            ref="slider"
            v-model="analysisOpacity"
            tooltip="hover"
            :disabled="analysis == ''"
            ></vue-slider>
          <b-input-group  size="sm"  append="%" 
            :disabled="analysis == ''">
            <b-form-input 
            :disabled="analysis == ''" size="sm"  v-model="analysisOpacity"></b-form-input>
          </b-input-group>
        </div>
      </b-form-group>
        
    </div>
    <b-dropdown-divider></b-dropdown-divider>
    <div class = "right-menu__category" v-if="analysis == 'Flooding'">
 


      <div class = "analysis__tooltip-wrapper">
        <b>Legend</b>
        <v-icon name="info-circle"
          scale="1.5"
          v-b-tooltip.hover.right.viewport 
          title = "Risk zones as defined by the county administrative boards of Västra Götaland and Värmland in the report 
          Stigande vatten (2011)."/>
      </div>
      <ul class="legend">
        <li><span class="z4"></span> Zone 4</li>
        <li><span class="z3"></span> Zone 3</li>
        <li><span class="z2"></span> Zone 2</li>
        <li><span class="z1"></span> Zone 1</li>
      </ul>

    </div>
    

  <b  v-if="analysis == 'Flooding'">Detailed information</b>
  <p  v-if="analysis == 'Flooding'">
   In zone 4 there is a risk of flooding 
   once per 100 years, or more often. In zone 3 the risk is between once per 100
   years and once per 200 years. In zone 2 the risk is between once per 200 years 
   and the highest calculated flow possible. In zone 1 there is no risk of flooding.
  </p>
  <p  v-if="analysis == 'Flooding'">
   This risk is calculated based on historic data for the flow and water heights of
   rivers and lakes, combined with climate and terrain models. The analysis takes future
   climate changes into account .
 </p>


  </div>
</template>

<script>

export default {
  name: 'AnalysisSettings',
  components: {
    
  },
  data () {
    return {
      simulations: [
        { text: 'None', value: "" },
        "Flooding",
        "Noise",
        "Proximity to public transport",
        "Sun and shading",
        "Traffic",
        "Wind",
      ],
    }
  },
  methods: {
   
  },
  computed: {
    analysisOpacity: {
      get: function () {
        return this.$store.state.analysisOpacity*100;
      },
      set: function (newValue) {
        this.$store.commit("setAnalysisOpacity", Math.round(newValue)/100);
      }
    },
    analysis: {
      get: function () {
        return this.$store.state.analysis;
      },
      set: function (newValue) {
          this.$store.commit("setAnalysis",newValue);
      }
    }
  },
}
//f8fbfc
//#03A9F4
</script>

<style scoped>
  .legend { 
    list-style: none; 
    margin-top: 1vh;
  }
  .legend li {     
    display: flex;
    align-items: center; }
  .legend span { 
    border: 1px solid #ccc; 
    width: 2vh;
    height: 2vh;
    margin: 0.5vh;
  } 
  /* your colors */
  .legend .z1 { background-color: #3adb45; }
  .legend .z2 { background-color: #ffff00; }
  .legend .z3 { background-color: #f7931e; }
  .legend .z4 { background-color: #f40006; }
  .analysis__tooltip-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .right-menu__category h4{
      font-size: 1.35rem;
  }

</style>