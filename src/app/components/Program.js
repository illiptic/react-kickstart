import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Program extends Component{
  render() {
    // Injected by connect() call:
    const { shows } = this.props;

    console.log(shows);

    return (
      <div>
        <h1>Program</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {['jour', 'groupe'].map(label => <th key={label}>{label}</th>)}
            </tr>
          </thead>
          <tbody>
            {shows.map(show =>
              <tr key={show.id}>
                <td>{show.date.toISOString()}</td>
                <td>{show.act}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

Program.propTypes = {
  shows: PropTypes.array
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => {
  return {
    shows: state.program.shows || [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch(toggleDisplay())
    }
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Program)
