const values: {
  [key: string]: unknown;
} = {};

class ProxySandbox {
  proxy: any;
  constructor() {
    this.create();
  }
  public create() {
    this.proxy = new Proxy(window, {
      get(
        target: {
          [key: string]: any;
        },
        key: string
      ) {
        if (typeof target[key] === "function") {
          return target[key].bind(window);
        }
        return values[key] || target[key];
      },
      set(target, key: string, value: any) {
        values[key] = value;
        return true;
      },
    });
  }
}

export default ProxySandbox;
