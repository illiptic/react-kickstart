import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Program extends Component{
  render() {
    // Injected by connect() call:
    const { shows } = this.props;

    return (
      <div>
        <h1>Program</h1>
        <span>{JSON.stringify(this.props.sorting)}</span>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {['day', 'act'].map(label =>
                <th key={label} onClick={() => this.props.sort(label)}>
                {label}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {shows
              .sort(sorter.bind(this, this.props.sorting))
              .map(show =>
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

function sorter(sorting, a,b) {
  let {column, dir } = this.props.sorting
  let [a1,b1] = [a[column], b[column]]
  if (a1 > b1)
    return dir
  if (b1 > a1)
    return -dir
  else
    return 0
}

Program.propTypes = {
  shows: PropTypes.array
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => {
  return {
    shows: state.program.shows || [],
    sorting: state.program.sorting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sort: (column) => {
      console.log('sort', column)
      dispatch({ type: 'SORT_COLUMN', column: column })
    }
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Program)
