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
    'setHideTypeMenu'
  ] })],
  state: {
    activePenMode: "",
    activeRedo: false,
    activeUndo: true,
    activePaste: false,
    activeSketchId: 0,
    activeArea: "unassigned",
    activeLine: "unassigned",
    activeMode: "sketch",
    activeTool: "select",
    hideTypeMenu: false,
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
    setHideTypeMenu(state, hide){
      state.hideTypeMenu = hide;
    },
  },
  getters: {
    activeSketchName: state => {
      return state.sketchNames[state.activeSketchId];
    }
  }
})