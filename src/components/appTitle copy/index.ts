import { html, css } from "iares";

import { createState } from "iares";

const styles = () => css`
  app-title {
    display:flex;
    flex-wrap: wrap;
    background: #ebebeb
  }

  .title-ctx {
    color: #666;
    display:flex;
    width:100%;
    justify-content: center;
  }

  .title-ctx:hover { cursor: pointer }

  p {
    display:flex;
    width:100%;
    justify-content: center;
  }

`;

const template = ({ props, state, actions }) => {
  return html`
  <div>
    <slot id="primeira-parte"></slot>
    <h1
      class="title-ctx"
      onClick=${() => actions.setTitle({ title: "beautiful world!" })}
    >
      Hello ${state.name}

    </h1>
  </div>
`;
};

type Model = {
  name: string;
};

export const AppTitle = ({ props }) => {
  const store = createState<Model>({ name: "World" });

  const setTitle = (payload: Model) => {
    store.setState(payload);
  };

  const afterMount = () => {
    console.log("after mount component");
  };

  return {
    store,
    template,
    styles,
    actions: { setTitle },
    hooks: { afterMount },
  };
};
