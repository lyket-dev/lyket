import React from 'react';
import { Provider, LikeButton } from '../src';

export default {
  title: 'LikeButton',
};

export const Simple = () => (
  <Provider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
  >
    <LikeButton id="everybody-like-now" namespace="test" />
  </Provider>
);

export const Twitter = () => (
  <Provider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
  >
    <>
      <LikeButton
        id="everybody-like-now"
        namespace="homepage"
        component={LikeButton.themes.Twitter}
      />
      <div style={{ fontSize: '20px' }}>
        <LikeButton
          id="everybody-like-now"
          namespace="homepage"
          component={LikeButton.themes.Twitter}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <LikeButton
          id="everybody-like-now"
          namespace="homepage"
          component={LikeButton.themes.Twitter}
        />
      </div>
    </>
  </Provider>
);
