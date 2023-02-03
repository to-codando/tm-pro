export default (state) => {
  state.merge({
    message: 'A simple, fast and lightweight library for front end development.'
  })

  const getState = () => state.get()

  return { getState }
}
