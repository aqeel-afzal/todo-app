export class LocalStorageClass {
  isSupported: boolean;

  constructor() {
    this.isSupported =
      typeof window["localStorage"] != "undefined" &&
      window["localStorage"] != null;
  }

  set(key: string, item: string) {
    if (this.isSupported) {
      localStorage.setItem(key, item);
    }
  }

  get(key: string): string | null {
    if (this.isSupported) {
      let item = localStorage.getItem(key);
      return item;
    } else {
      return null;
    }
  }

  remove(key: string) {
    if (this.isSupported) {
      localStorage.removeItem(key);
    }
  }

  clear() {
    if (this.isSupported) {
      localStorage.clear();
    }
  }
}

export const LocalStorage = new LocalStorageClass();
