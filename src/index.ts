import ProxySandbox from "./proxySandBox";

declare const window: Window & { _proxy: any };

export default function runJS(
  scriptStr: string,
  pkgName?: string,
) {
  window._proxy = new ProxySandbox();

  const returnStr = pkgName ? `return window.${pkgName}` : "";

  return new Function(`
    return ((window) => {
      ${scriptStr};
      ${returnStr}
    })(window._proxy)
  `)()
}
