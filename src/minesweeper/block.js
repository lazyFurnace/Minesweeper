import React from 'react';

export default class Block extends React.Component {
  render() {
    const style = {
      width: "20px",
      height: "20px",
      padding: "0"
    }
    return (
      <button style={style}>
        {}
      </button>
    )
  }
}