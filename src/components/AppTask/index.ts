import { html, css } from "iares";
import { createState } from "iares";

import { AppDatepicker } from "../AppDatepicker";
import { AppHead } from "../AppHead";

const styles = () => css`

  app-task {
    background: #fff
  }

  app-task,
  .wrap-ctx,
  .head-ctx {
    display:flex;
    width:100%;
  }

  .head-ctx {
    justify-content: space-between;
  }

  .datepicker-ctx {
    display: flex;
    flex-wrap: wrap;
    width:250px;
  }

`;

const template = ({ props, state, actions }) => html`
  <div class="wrap-ctx">
      <div class="head-ctx">
        <div class="datepicker-ctx">
          <${AppHead} behaviour=${state.appHeadBehaviour}>
            <slot target="mid">
              <h2>Data de conclusão: </h2>
            </slot>
          </>
          <${AppDatepicker}/>
        </div>
      </div>
  </div>
`;

export const AppTask = ({ props }) => {
  const store = createState({
    appHeadBehaviour: {
      show: {
        start: false,
        mid: true,
        end: false,
      },
    },
  });

  return {
    store,
    template,
    styles,
  };
};
