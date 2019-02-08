import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from 'vuex-shared-mutations';

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createMutationsSharer({ predicate: [
    'setActiveArea',
    'setActiveLine',
    'setActiveMode',
    'setActiveTool',
    'setHideTypeMenu',
    'setBackgroundImage',
    'setBackgroundOpacity',
    'showLayerMenu',
    'toggleTool',
    'backgroundTopography',
    'setShowTopography',
    'setStreetType',
    'setResidentialHeight',
    'setResidentialType',
    'setIndustryType',
    'setImageLayers'
  ] })],
  state: {
    backgroundImage: "lerum.png",
    backgroundTopography: "lerum-topography.png",
    backgroundOpacity: 0.5,
    showTopography: true,
    activePenMode: "",
    activeCopy: false,
    activeRedo: false,
    activeUndo: true,
    activePaste: false,
    activeSketchId: 0,
    activeArea: "unassigned",
    activeLine: "unassigned",
    activeMode: "sketch",
    activeTool: "select",
    hideTypeMenu: false,
    showLayerMenu: false,
    streetType: null,
    residentialType: null,
    residentialHeight: 3,
    industryType: null,
    paths: [],
    sketchNames: ["Sketch 1", "Sketch 2", "Sketch 3"],
    imageLayers: [],
  },
  mutations: {
    setImageLayers(state, layers){
      Vue.set(state, "imageLayers", layers);
    },
    setActiveArea (state, area) {
      state.activeArea = area;
    },
    setActiveLine (state, line) {
      state.activeLine = line;
    },
    setActiveMode (state, mode) {
      state.activeMode = mode;
    },
    setActiveTool (state, tool) {
      state.activeTool = tool;
    },
    toggleTool (state, tool) {
      if(state.activeTool == tool){
        state.activeTool='none';
      } else {
        state.activeTool = tool;
        state.hideTypeMenu = false;
      }
    },
    setHideTypeMenu(state, hide){
      state.hideTypeMenu = hide;
    },
    setBackgroundImage(state, path){
      state.backgroundImage = path;
    },
    setBackgroundTopography(state, path){
      state.backgroundTopography = path;
    },
    setBackgroundOpacity(state, opacity){
      state.backgroundOpacity = opacity;
    },
    setShowTopography(state, show){
      state.showTopography = show;
    },
    showLayerMenu(state, show){
      state.showLayerMenu = show;
    },
    setResidentialType(state, type){
      state.residentialType = type;
    },
    setStreetType(state, type){
      state.streetType = type;
    },
    setResidentialHeight(state, height){
      state.residentialHeight = height;
    },
    setIndustryType(state, type){
      state.industryType = type;
    },
  },
  getters: {
    activeSketchName: state => {
      return state.sketchNames[state.activeSketchId];
    }
  }
})