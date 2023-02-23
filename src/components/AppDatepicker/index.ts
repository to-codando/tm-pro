import { html, css } from "iares";

import { AppIcon } from "@/components/appIcon";

const styles = () => css`
  app-datepicker,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5px;
    background:#f8fdff;
  }

  .wrap-ctx {
    padding:0 15px 0 0;
    border: 1px  #dee3e6 solid
  }

  .wrap-ctx  input {
    display: flex;
    width:100%;
    height:48px;
    padding: 0 15px;
    margin-right:15px;
    border:0;
    outline: 0;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;

    outline: 1px #e3ebf2 solid;
    background: #fff;
    color: #9f9baa;
    transition: all .3s;
  }

  .wrap-ctx > input:focus {
    outline-offset: -10px;
  }


  .wrap-ctx [icon]:hover {
    cursor: pointer
  }


`;

const template = ({ props, state, actions }) => html`
  <div class="wrap-ctx">
    <input type="text" value="24/02/2023 - 04/03/2023"/>
    <${AppIcon} name="calendar_month" color="#B5B5CE"/>
  </div>
`;

export const AppDatepicker = ({ props }) => {
  return {
    template,
    styles,
  };
};
