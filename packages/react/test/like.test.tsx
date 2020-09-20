import React from 'react';
import * as ReactDOM from 'react-dom';
import { Simple, Twitter } from '../stories/LikeButton.stories';

describe('LikeButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Simple />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Twitter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
