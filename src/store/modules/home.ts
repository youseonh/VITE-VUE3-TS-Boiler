import { defineStore } from 'pinia';
import axiosHelper from '@utils/axios';

export const useHomeStore = defineStore({
  // 유일한 아이디
  id: 'home',
  state: () => {
    return {
      themeType: '파란색',
      themeColor: '#2080F0FF',
      info: 'info',
    };
  },
  // vuex와 동일한 getter
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },
  // pinia에서는 mutation 사용 x, actions만 등록
  actions: {
    // 비동기 형식도 가능
    setThemeType(type: string) {
      this.themeType = type;
    },
    setInfo(info: string) {
      this.info = info;
    },
    async getInfo() {
      const res = await axiosHelper.get('/', { data: 'data' });
      if (res) {
        this.setInfo(res);
      }
      return res;
    },
  },
});
