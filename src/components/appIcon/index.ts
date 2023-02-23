import { html, css } from "iares";

const styles = () => css`
  .icon-ctx {
    display:flex;
  }
`;

const template = ({ props }) => {
  return html`
  <span
    class="material-symbols-rounded"
    onClick=${() => props.handle()}
    style="color:${props.color}"
    icon
  >
    ${props.name}
  </span>
`;
};

export const AppIcon = ({ props }) => {
  return {
    template,
    styles,
  };
};
