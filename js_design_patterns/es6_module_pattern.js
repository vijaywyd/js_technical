var o = {bar: "bar"}

export function bar() {
  return o.bar;
}

import bar from "bar";
bar();
