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
    'toggleTool',
    'setBackgroundTopography',
    'setShowTopography',
    'setStreetType',
    'setResidentialHeight',
    'setResidentialType',
    'setIndustryType',
    'setImageLayers',
    'mergeWithState',
    'setAnalysis',
    'setAnalysisOpacity',
    'setActiveLayerMenu',
    'setActiveCopy',
    'setActiveUndo'
  ] })],
  state: {
    backgroundImage: "lerum.png",
    backgroundTopography: "lerum-topography.png",
    backgroundOpacity: 0.75,
    showTopography: false,
    analysisOpacity: 0.85,
    analysis: "",
    analysisPaths: {
      "Flooding": "klar__flooding.png"
    },
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
    streetType: null,
    residentialType: null,
    residentialHeight: 3,
    industryType: null,
    paths: [],
    sketchNames: ["Hallegården", "Riverfront"],
    imageLayers: [],
    overlayLayers: [],
    activeLayerMenu: "",
  },
  mutations: {
    setActiveCopy(state, allowCopy){
      state.activeCopy = allowCopy;
    },
    setActiveUndo(state, allowUndo){
      state.activeUndo = allowUndo;
    },
    setActiveLayerMenu(state, menuName){
      state.activeLayerMenu = menuName;
    },
    setImageLayers(state, layers){
      Vue.set(state, "imageLayers", layers);
    },
    setOverlayLayers(state, layers){
      Vue.set(state, "overlayLayers", layers);
    },
    setAnalysis(state, path){
      state.analysis = path;
    },
    setAnalysisOpacity(state, opacity){
      state.analysisOpacity = opacity;
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
    mergeWithState(state, payload){
      for (var attribute in payload) { 
        Vue.set(state, attribute, payload[attribute]); 
      }
    }
  },
  getters: {
    activeSketchName: state => {
      return state.sketchNames[state.activeSketchId];
    },
    showMapSetting: state => {
      return state.activeLayerMenu == 'map';
    },
    showAnalysisSettings: state => {
      return state.activeLayerMenu == 'analysis';
    },
    showLayerSettings: state => {
      return state.activeLayerMenu == 'layer';
    },
    showReport: state => {
      return state.activeLayerMenu == 'report';
    },
    showRightMenu: state => {
      return state.activeLayerMenu != null && state.activeLayerMenu != '';
    },
    activeAnalysisPath: state => {
      return state.analysisPaths[state.analysis];
    }
  }
})