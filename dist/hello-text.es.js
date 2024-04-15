import { toRefs as l, openBlock as n, createElementBlock as c, toDisplayString as r, unref as s } from "vue";
const f = {
  __name: "HelloText",
  props: {
    text: {
      type: String,
      default: "hello text"
    }
  },
  setup(e) {
    const o = e, { text: t } = l(o);
    return console.log("text prop：", t.value), (p, a) => (n(), c("h2", null, r(s(t)), 1));
  }
};
function x(e) {
  console.table(e);
}
export {
  x as consoleTable,
  f as default
};
