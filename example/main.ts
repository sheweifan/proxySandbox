import { createApp } from "vue";
import App from "./App.vue";

import createProxySandbox from "../src/index";

createProxySandbox(`
  window.a = 1
  console.log(window.a)
`);

const _proxy = createProxySandbox(`
console.log(window.a)
  window.a = 2
  console.log(window.a)
`, 'a');

console.log(`_proxy`, _proxy)

createApp(App).mount("#app");
