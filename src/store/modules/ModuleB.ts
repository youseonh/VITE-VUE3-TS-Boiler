// src/store/modules/ModuleB.ts
import { Module } from "vuex";
import { RootState } from "../index";
import ModuleB from "../../types/ModuleBType";

const module: Module<ModuleB, RootState> = {
  namespaced: true,
  state: { data: "ModuleB Data" },
  mutations: {
    setData(state, data: string) {
      // -> commit('moduleB/setData')
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }, data: string) {
      // -> dispatch('moduleB/setRootData')
      console.log("module B set Root Data");
      commit("setData", data);
    },
  },
  getters: { data: (state) => state.data }, // -> getters['moduleB/data']
};
export default module;
