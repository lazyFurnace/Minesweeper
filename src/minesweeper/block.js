import React from 'react';

export default class Block extends React.Component {
  render() {
    const style = {
      width: "20px",
      height: "20px",
      padding: "0",
      lineHeight: "16px"
    }
    const { val } = this.props;
    return (
      <button style={style}>
        {val.thunder ? "✱" : ""}
      </button>
    )
  }
}