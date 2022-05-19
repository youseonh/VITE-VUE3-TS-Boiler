/**
 * 로컬 스토리지 사용 유틸
 */
class LocalCache {
  setCache(key: string, value: any) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearLocal() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
