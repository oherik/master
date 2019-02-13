<template>
 <div v-if="this.$store.getters.showReport">
     
     <h3 class = "right-menu__heading">Sketch details</h3>
 Information about the sketch, such as total sketched area, estimated population, and more.



   
    <div class = "right-menu__category">
      <div class = "report__item">
        
        <h4> Sketch content </h4>
        <v-icon name="info-circle"
          scale="1.5"
          v-b-tooltip.hover.right.viewport 
          title = "Area and length footprints of your sketch, per type and subcategory
    "    />
      </div>
      <b-table hover striped small :items="items" :fields="fields"></b-table>
      <b-table hover striped small :items="streets" :fields="fieldsStreets"></b-table>
    </div>
        <b-dropdown-divider></b-dropdown-divider>
    <div class = "right-menu__category">
      <div class = "report__item">
        <h4> Estimations </h4>
        <v-icon name="info-circle"
          scale="1.5"
          v-b-tooltip.hover.right.viewport 
          title = "Estimations based on your sketch and models from VirtualCity@Chalmers"    />
      </div>
        <div class = "report__item"><span>Population:</span><span>1 320</span></div>
    </div>



  </div>
</template>

<script>
const items = [
    { area_type: "Park and nature", area: "8 210", _rowVariant: 'danger'},
   { area_type: "- City park", area: "8 210"},
  { area_type: "Residential", area: "24 430", _rowVariant: 'danger'},
   { area_type: "- Apartments", area: "17 020"},
    { area_type: "- Houses", area: "7 410"},
];
const streets = [
    { street_type: "Street", length: "254", _rowVariant: 'danger'},
   { street_type: "- Main street", length: "254"},
  { street_type: "Pedestrian path", length: "202", _rowVariant: 'danger'},
];
export default {
  name: 'Report',
  
  components: {
    
  },
  data () {
    return {
      items: items,
      streets: streets,
      fields: {
        area_type: {
          label: 'Type',
          sortable: false,
          tdClass: "whitespace"
        },
        area: {
          label: 'Footprint (m2)',
          sortable: false,
          class: "report__right-column",
        },
      },
      fieldsStreets: {
          street_type: {
          label: 'Type',
          sortable: false,
          tdClass: "whitespace"
        },
        length: {
          label: 'Footprint (m)',
          sortable: false,
          class: "report__right-column",
        },
      }
    }
  },
  methods: {
    tab(n){
      return "tab-" + n;
    }
   
  },
  computed: {
    
  },
}

</script>

<style>
  .whitespace{
    white-space: pre-line;
  }
  .report__right-column{
    text-align: right;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.03);
  }
  .table-danger{
    background-color: rgba(0, 0, 0, 0.03) !important;
    font-weight: 500;
    border-color: rgb(222, 226, 230);
  }
  .table-danger td{
    background-color: rgba(0, 0, 0, 0.03) !important;
    border-color: rgb(222, 226, 230) !important;
  }
  .report__item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
 

</style>