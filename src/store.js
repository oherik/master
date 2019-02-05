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
    paths: [],
    sketchNames: ["Sketch 1", "Sketch 2", "Sketch 3"]
  },
  mutations: {
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
    }
  },
  getters: {
    activeSketchName: state => {
      return state.sketchNames[state.activeSketchId];
    }
  }
})