export default ({ html, css, controller }) => {
  const template = () => html`
    <div class="ctx-wrap" onClick=${controller.getAny}>
      <h1>404</h1>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    .ctx-wrap {
      font-size: 6em;
      font-weight: 200;
      padding: 3em 1em;
    }

    .ctx-wrap > h1 {
      margin: 0 auto;
    }
  `

  return { template, styles }
}
