import React from 'react';
import * as ReactDOM from 'react-dom';
import { Simple, Medium } from '../stories/ClapButton.stories';

describe('ClapButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Simple />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Medium />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
