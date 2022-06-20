class LocalStorageHelper {
  constructor() {
    if (this instanceof LocalStorageHelper) {
      throw Error('A static class cannot be instantiated.');
    }
  }
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
export default LocalStorageHelper;