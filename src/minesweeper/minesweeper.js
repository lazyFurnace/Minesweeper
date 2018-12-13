import React from 'react';

import Row from './row';
import Block from './block';

const layout = {
  row: 20,
  column: 20,
  thunder: 5
}

export default class Minesweeper extends React.Component {
  createLayout = (layout) => {
    const layoutArr = [];
    for (let row = 0; row < layout.row; row++) {
      layoutArr[row] = [];
      for (let column = 0; column < layout.column; column++) {
        layoutArr[row][column] = {
          position: [row, column],
          thunder: false,
          flag: false,
          pass: false,
          num: 0
        }
      }
    }
    return layoutArr;
  }
  initLayout = (layout) => {
    const data = this.createLayout(layout);
    return data;
  }
  render() {
    const layoutData = this.initLayout(layout);
    const style = {
      margin: "20px auto",
      display: "inline-block"
    }
    return (
      <div style={style}>
        {layoutData.map((item, index) => (
          <Row key={index}>
            {item.map((val, key) => (
              <Block key={key} val={val} />
            ))}
          </Row>
        ))}
      </div>
    )
  }
}
