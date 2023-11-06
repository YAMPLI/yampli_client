const Storage = {
  setLocalStorage(key, value) {
    return window.localStorage.setItem(key, value);
  },
  getLocalStorage(key) {
    return window.localStorage.getItem(key);
  },
};

export default Storage;
