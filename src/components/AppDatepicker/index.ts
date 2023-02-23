import { html, css } from "iares";

import { AppIcon } from "@/components/appIcon";

const styles = () => css`
  app-datepicker,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5px;
    background:#fff;
  }

  .wrap-ctx {
    padding:0 15px 0 0;
  }

  .wrap-ctx  input {
    display: flex;
    width:100%;
    height:50px;
    padding: 0 15px;
    margin-right:15px;
    border:0;
    outline: 0;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    border-right: 1px #ebebeb solid;
    background:#fff;
    color: #666
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
