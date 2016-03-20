import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import { addToList, toggleDisplay } from './actions/exampleActions.js';

class App extends Component{
  render() {
    // Injected by connect() call:
    const { addItem, toggle, example, example2 } = this.props;

    let inputValue
    return (
      <div>
        <button onClick={e => toggle()}>
          Toggle
        </button>
        <span style={{display: (example ? '' : 'none')}}>Hide me</span>
        <hr />
        <form onSubmit={e => {
          e.preventDefault()
          addItem(e.target)
        }}>
        <input type="text" name="itemText" />
        <button type="submit">
          Add
        </button>
        </form>
        <ul>
          {example2.map(item =>
            <li key={item}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  example: PropTypes.bool,
  example2: PropTypes.array
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => {
  return {
    example: state.example,
    example2: state.example2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch(toggleDisplay())
    },
    addItem: (form) => {
      let value = form.itemText.value.trim();
      if(!value) return
      dispatch(addToList(value))
    }
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App)
