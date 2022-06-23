import React from 'react';
import ReactDOM from 'react-dom';
import Pixi from './Pixi';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pixi />, div);
  ReactDOM.unmountComponentAtNode(div);
});