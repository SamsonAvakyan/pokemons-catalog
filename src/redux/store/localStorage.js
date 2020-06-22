export const loadState = () => {
  const serializedState = localStorage.getItem('state')
  return serializedState ? JSON.parse(serializedState) : {}
}

export const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}