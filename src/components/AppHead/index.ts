import { html, css } from "iares";

const styles = () => css`
  app-header {
    padding:15px;
    flex-wrap: wrap;
  }

  .wrap-ctx,
  app-head {
    display:flex;
    width: 100%;
  }

  .wrap-ctx {
    justify-content: space-between;
    align-items: center;
  }

  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    color: #9f9baa;
  }

  .wrap-ctx > h1{ font-size: 1.2em;  }
  .wrap-ctx > h2 { font-size: 1em;  }
  .wrap-ctx > h3 { font-size: 0.875em;  }

  .wrap-ctx > i {
    width: 100%
  }

  .wrap-ctx > i + i {
    margin-left: 15px;
  }

  .wrap-ctx > i:first-of-type,
  .wrap-ctx > i:last-of-type {
    width:15px;
  }


`;

const template = ({ props, state, actions }) => html`
  <div class="wrap-ctx">
    <i>
      <slot id="start"></slot>
    </i>

    <i>
      <slot id="mid"></slot>
    </i>

    <i>
      <slot id="end"></slot>
    </i>
  </div>
`;

export const AppHead = ({ props }) => {
  return {
    template,
    styles,
  };
};
