import React from 'react';
import ReactDOM from 'react-dom';
import Rockman from './Rockman';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rockman />, div);
  ReactDOM.unmountComponentAtNode(div);
});