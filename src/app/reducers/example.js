export default function example(state = true, action){
  switch (action.type) {
    case 'TOGGLE_DISPLAY':
      return !state
    default:
      return state
  }
}
