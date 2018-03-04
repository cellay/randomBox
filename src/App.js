import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function Box () {

  let randomColor = ['red', 'gold', 'greenyellow', 'turquoise', 'dodgerblue', 'violet', 'royalblue'];
  let randomFont = ['Indie Flower', 'Lobster', 'Nanum Pen Script', 'Luckiest Guy', 'Orbitron',  'Wallpoet', 'Sedgwick Ave Display'];

  let style = {
    backgroundColor : randomColor[Math.round(Math.random()*(6-0)+0)],
    fontFamily: randomFont[Math.round(Math.random()*(6-0)+0)]
  };

  return <div className= 'center random' style = {style}> Random Box</div> 
}

ReactDOM.render(
  <Box />,
  document.getElementById('root'), 
)