const initialState = {
  shows: [
    {id: 1, date: new Date(), act: 'Cheese'},
    {id: 2, date: new Date(), act: 'Toast'},
    {id: 3, date: new Date(), act: 'Dwarves'}
  ],
  sorting: {},
  filters: {}
}

export default function program(state = initialState, action){
  switch (action.type) {
    case 'SORT_COLUMN': return sort(state, action.column)
    default:
      return state
  }
}

function sort(state, column){
  return Object.assign({}, state, {
    sorting: {
    'column': column,
    'dir': state.sorting.column === column ? -state.sorting.dir : 1
    }
  })
}
