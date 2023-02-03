export default ({ model }) => {
  const getAny = () => model.getState()
  return { getAny }
}
