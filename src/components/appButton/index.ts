import { html, css } from "iares";

const styles = () => css`
  app-button {
    box-shadow: 3px 1px 15px #cddce9
  }

  app-button,
  .button-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width:48px;
    height:48px;
    border-radius:100%;
    background: #f8fdff;
  }

  .button-ctx [icon] {
    font-size: 1.8em;
    color: #B5B5CE;

  }
`;

const template = ({ props, state, actions }) => html`
  <button class="button-ctx">
    <slot id="content"></slot>
  </button>
`;

export const AppButton = ({ props }) => {
  return {
    template,
    styles,
  };
};
