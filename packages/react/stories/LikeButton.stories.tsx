import React from 'react';
import { Provider, LikeButton } from '../src';

export default {
  title: 'LikeButton',
};

export const Simple = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <LikeButton id="simple-example" namespace="stories" />
  </Provider>
);

export const Twitter = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <LikeButton
        id="twitter-example"
        namespace="stories"
        component={LikeButton.templates.Twitter}
      />
      <div style={{ fontSize: '20px' }}>
        <LikeButton
          id="twitter-example"
          namespace="stories"
          component={LikeButton.templates.Twitter}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <LikeButton
          id="twitter-example"
          namespace="stories"
          component={LikeButton.templates.Twitter}
        />
      </div>
    </>
  </Provider>
);
