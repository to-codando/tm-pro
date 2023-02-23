import { html, css } from "iares";

const styles = () => css`
    app-header {
      box-shadow: 3px 3px 15px #e5e5ee
    }

    app-header,
    .wrap-ctx {
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
      width:100%;
      height:90px;
      background: #f8fdff;
    }

    .content-ctx {
      display:flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width:100%;
      max-width:680px;
      padding:20px;
    }

    .test {
      display:block;
      float:left;
      width:100%;
      padding:15px;
      background: #f00;
    }
`;

const template = () => html`
    <div class="wrap-ctx">
      <div class="content-ctx">
          <slot id="content"></slot>
      </div>
    </div>`;

export const AppHeader = () => {
  return {
    template,
    styles,
  };
};
