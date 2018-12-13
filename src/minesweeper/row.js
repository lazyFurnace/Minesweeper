import React from 'react';

export default class Row extends React.Component {
  render() {
    const style = {
      display: "flex"
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}