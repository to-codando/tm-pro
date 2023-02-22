//ignore
import { createApp, html, render } from "iares";

import { AppMain } from "@/components/appMain";

export const appHost = createApp({
  onMount(context, props) {
    render(html`<${AppMain} />`);
  },
});
