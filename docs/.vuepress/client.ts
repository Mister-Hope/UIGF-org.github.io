import { defineClientConfig } from "vuepress/client";
import Pcd from "./components/ProjCardDev.vue";
import Pcb from "./components/ProjCardBadge.vue";
import RelativeProject from "./components/RelativeProject.vue";
import RelativeProjectPanel from "./components/RelativeProjectPanel.vue";

export default defineClientConfig({
  enhance(ctx) {
    const comps = {
      Pcd,
      Pcb,
      RelativeProject,
      RelativeProjectPanel,
    };

    for (const name in comps) {
      if (Object.prototype.hasOwnProperty.call(comps, name)) {
        ctx.app.component(name, comps[name]);
      }
    }
  },
});
