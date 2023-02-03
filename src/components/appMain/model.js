export default (state) => {
  state.merge({})

  const getState = () => state.get()

  return { getState }
}
