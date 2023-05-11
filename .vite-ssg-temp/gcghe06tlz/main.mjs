import { defineComponent, ref, useSSRContext, createApp } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const style = "";
const _imports_0 = "/vite.svg";
const _imports_1 = "/assets/vue-5532db34.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: { type: String, required: true }
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-e17ea971>${ssrInterpolate(_ctx.msg)}</h1><div class="card" data-v-e17ea971><button type="button" data-v-e17ea971>count is ${ssrInterpolate(count.value)}</button><p data-v-e17ea971> Edit <code data-v-e17ea971>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-e17ea971> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-e17ea971>create-vue</a>, the official Vue + Vite starter </p><p data-v-e17ea971> Install <a href="https://github.com/vuejs/language-tools" target="_blank" data-v-e17ea971>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-e17ea971>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
});
const HelloWorld_vue_vue_type_style_index_0_scoped_e17ea971_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e17ea971"], ["__file", "D:/Documents/Git/talon/src/components/HelloWorld.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-7a7a37b1><a href="https://vitejs.dev" target="_blank" data-v-7a7a37b1><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-7a7a37b1></a><a href="https://vuejs.org/" target="_blank" data-v-7a7a37b1><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-7a7a37b1></a></div>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "Vite + Vue" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const App_vue_vue_type_style_index_0_scoped_7a7a37b1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a7a37b1"], ["__file", "D:/Documents/Git/talon/src/App.vue"]]);
createApp(App).mount("#app");
