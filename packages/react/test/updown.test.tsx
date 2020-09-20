import React from 'react';
import * as ReactDOM from 'react-dom';
import { Simple, Reddit } from '../stories/UpdownButton.stories';

describe('UpdownButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Simple />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Reddit />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
