import React from 'react';

import Row from './row';
import Block from './block';

const layout = {
  row: 20,
  column: 20,
  thunder: 20
}

function createRendom(num) {
  return Math.floor(Math.random() * num);
}

export default class Minesweeper extends React.Component {
  // 生成布局数据
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
  // 生成地雷数据
  createMine = (layout) => {
    const layoutArr = [];
    for (let row = 0; row < layout.row; row++) {
      layoutArr[row] = [];
      for (let column = 0; column < layout.column; column++) {
        layoutArr[row].push(column);
      }
    }
    const mineArr = [];
    for (let thunder = 0; thunder < layout.thunder; thunder++) {
      const rowRendom = createRendom(layout.row);
      const rowNow = layoutArr[rowRendom];
      const [columnRendom] = rowNow.splice(createRendom(rowNow.length), 1);
      mineArr[thunder] = [rowRendom, columnRendom];
    }
    return mineArr;
  }
  // 生成扫雷游戏数据
  createGame = (layoutData, mineData) => {
    mineData.forEach(item => {
      const [row, column] = item;
      layoutData[row][column].thunder = true;
    })
    return layoutData;
  }
  initLayout = (layout) => {
    const layoutData = this.createLayout(layout);
    const mineData = this.createMine(layout);
    const gameData = this.createGame(layoutData, mineData);
    return gameData;
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
