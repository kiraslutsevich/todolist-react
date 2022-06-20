class LocalStorageHelper {
  constructor(name) {
    this.name = name;
  }
  get() {
    return JSON.parse(localStorage.getItem(this.name));
  }
  set(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
}
export default LocalStorageHelper;