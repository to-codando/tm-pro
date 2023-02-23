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
    outline: 1px #e3ebf2 solid;
    outline-offset: -2px;
    background: #f0f6f8;
    color:#9f9baa;
    transition: all .3s;
  }

  .wrap-ctx > input:focus {
    outline-offset: -10px;
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
    color: #f8fdff
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
