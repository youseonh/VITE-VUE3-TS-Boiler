// src/store/modules/ModuleA.ts
import { Module } from "vuex";
import { RootState } from "../index";
import ModuleA from "../../types/ModuleAType";

const module: Module<ModuleA, RootState> = {
  namespaced: true, // 추가
  state: { data: "ModuleA Data" },
  mutations: {
    setData(state, data: string) {
      // -> commit('moduleA/setData')
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }, data: string) {
      // -> dispatch('moduleA/setRootData')
      console.log("module A set Root Data");
      commit("setData", data);
    },
  },
  getters: { data: (state) => state.data }, // -> getters['moduleA/data']
};

export default module;
