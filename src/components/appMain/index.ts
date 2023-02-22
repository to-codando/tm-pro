import { html, css } from "iares";

import { AppTitle } from "../appTitle";
import { AppIcon } from "../appIcon";

const styles = () => css`
  app-main {
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height:100%;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
    background:#e0daf1;
  }

  .wrap-ctx {
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    width:100%;
    padding:15px;
    background:#ebebeb
  }

  .title-ctx {
    color:blue
  }

  .text-ctx { color: brown }


`;

const template = () => html`
  <div class="wrap-ctx">
    <${AppTitle}>
      <slot target="primeira-parte">
        <p class="icon-ctx">
            <${AppIcon} name="sentiment_calm" handle=${() => window.alert()}/>
        </p>
      </slot>
    <//>
  </div>
`;

export const AppMain = () => {
  return {
    template,
    styles,
  };
};
