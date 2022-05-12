// src/store/index.ts
import Vuex, { StoreOptions } from "vuex";
import moduleA from "./modules/ModuleA";
import moduleB from "./modules/ModuleB";

export interface RootState {
  data: string;
}
const store: StoreOptions<RootState> = {
  state: { data: "root" },
  modules: { moduleA, moduleB },
  mutations: {
    setData(state, data: string) {
      // -> commit('setData')
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }, data: string) {
      // -> dispatch('setRootData')
      console.log("RootState set Root Data");
      commit("setData", data);
    },
  },
  getters: {
    data: (state) => state.data, // -> getters['data']
  },
};

export default new Vuex.Store(store);
