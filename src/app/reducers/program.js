const initialState = {
  shows: [
    {id: 1, date: new Date(), act: 'Cheese'},
    {id: 2, date: new Date(), act: 'Toast'}
  ],
  filters: {}
}

export default function program(state = initialState, action){
  switch (action.type) {
    default:
      return state
  }
}
