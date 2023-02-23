import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";
import { AppSearch } from "@/components/AppSearch";
import { AppButton } from "@/components/appButton";
import { AppIcon } from "@/components/appIcon";
import { AppDatepicker } from "@/components/AppDatepicker";

const styles = () => css`
  app-main,
  .wrap-ctx {
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    height: 100vh;
    background: #e5ebed
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

  .controls-ctx,
  .tasks-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
  }

  .tasks-ctx {
    margin-top: 20px;
  }

  .datepicker-ctx,
  .buttons-ctx {
    display: flex;
    width:50%;
  }

 .datepicker-ctx {
  justify-content: flex-start;
 }

 .buttons-ctx {
  justify-content: flex-end;
 }

 .buttons-ctx > * + * {
  margin-left: 20px;
 }
`;

const template = () => html`
  <div class="wrap-ctx">

    <${AppHeader}>
        <slot target="content">
          <${AppSearch}/>
        </slot>
    <//>


    <div class="content-ctx">
      <div class="controls-ctx">
        <div class="datepicker-ctx">
          <${AppDatepicker}/>
        </div>
        <div class="buttons-ctx">
          <${AppButton}>
            <slot target="content">
              <${AppIcon} name="edit"/>
            </slot>
          </>

          <${AppButton}>
            <slot target="content">
              <${AppIcon} name="add"/>
            </slot>
          </>

          <${AppButton}>
            <slot target="content">
              <${AppIcon} name="delete"/>
            </slot>
          </>
        </div>
      </div>
      <div class="tasks-ctx"></div>
    </div>

  </div>
`;

export const AppMain = () => {
  const afterRender = () => {
    console.log(" AppMain ");
  };
  return {
    template,
    styles,
    hooks: {
      afterRender,
    },
  };
};
