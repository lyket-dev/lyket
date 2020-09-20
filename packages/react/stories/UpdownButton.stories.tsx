import React from 'react';
import { Provider, UpdownButton } from '../src';

export default {
  title: 'UpdownButton',
};

export const Simple = () => (
  <Provider
  apiKey="xxx"
  baseUrl="http://localhost:3000"
  >
    <>
      <UpdownButton id="everybody-vote-now" namespace="homepage" />
      <div style={{ fontSize: '20px' }}>
        <UpdownButton id="everybody-vote-now" namespace="homepage" />
      </div>
      <div style={{ fontSize: '30px' }}>
        <UpdownButton id="everybody-vote-now" namespace="homepage" />
      </div>
    </>
  </Provider>
);

export const Reddit = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <UpdownButton
        id="everybody-vote-now"
        namespace="homepage"
        component={UpdownButton.themes.Reddit}
      />
      <div style={{ fontSize: '20px' }}>
        <UpdownButton
          id="everybody-vote-now"
          namespace="homepage"
          component={UpdownButton.themes.Reddit}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <UpdownButton
          id="everybody-vote-now"
          namespace="homepage"
          component={UpdownButton.themes.Reddit}
        />
      </div>
    </>
  </Provider>
);
