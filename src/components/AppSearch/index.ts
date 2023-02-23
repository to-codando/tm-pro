import { html, css } from "iares";

import { AppIcon } from "../appIcon";

const styles = () => css`
  app-search,
  .wrap-ctx {
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
  }

  .wrap-ctx > input {
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: calc(100% - 70px);
    height:50px;
    padding:0 15px;
    border:0;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    outline:0;
    background: #e5ebed;
    transition: all .5s;
  }

  .wrap-ctx > input:focus {
    background: #DEEFF2;
  }

  .wrap-ctx > button {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:70px;
    height:50px;
    border:0;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    background: #7bccde;
  }

  .wrap-ctx > button [icon] {
    color: #fff
  }
`;

const template = ({ props, state, actions }) => html`
  <div class="wrap-ctx">
    <input type="text"/>
    <button>
      <${AppIcon} name="search"/>
    </button>
  </div>
`;

export const AppSearch = () => {
  return {
    template,
    styles,
  };
};
