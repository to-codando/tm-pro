import logo from '@/assets/images/logo.png'

export default ({ html, css }) => {
  const template = ({ state }) => html`
    <div>
      <h1>
        <img src=${logo} alt="Terezzu JS" class="logo" />
      </h1>
      <p>${state.message}</p>
    </div>
  `

  const styles = () => css`
    ctx,
    ctx > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

    ctx h1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 220px;
      height: 150px;
    }

    ctx p {
      max-width: 320px;
      text-align: center;
      line-height: 1.4em;
      color: #666;
    }

    ctx .logo {
      display: flex;
      width: 100%;
      max-width: 150px;
    }
  `

  return { template, styles }
}
