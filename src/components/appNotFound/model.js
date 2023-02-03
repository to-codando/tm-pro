export default state => {
  state.merge({
    message: 'Not Found - 404'
  })

  const getState = () => state.get()

  return { getState }
}
