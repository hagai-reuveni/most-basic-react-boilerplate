import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>What to render</h1>,
  document.getElementById('rootAppNode')
);

module.hot.accept();
