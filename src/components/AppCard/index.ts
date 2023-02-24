import { html, css } from "iares";

const styles = () => css`
  app-card {
    padding:15px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #cddce9;
    background: #f8fdff;
  }

  app-card,
  .wrap-ctx,
  .header-ctx,
  .body-ctx,
  .footer-ctx {
    display:flex;
    flex-wrap: wrap;
    width: 100%;
  }

`;

const template = ({ props, state, actions }) => html`
  <div class="wrap-ctx">
    <div class="header-ctx">
      <slot id="head"></slot>
    </div>
    <div class="body-ctx">
      <slot id="body"></slot>
    </div>
    <div class="footer-ctx">
      <slot id="footer"></slot>
    </div>
  </div>
`;

export const AppCard = ({ props }) => {
  return {
    template,
    styles,
  };
};
