import React from 'react';
import { Provider, UpdownButton } from '../src';

export default {
  title: 'UpdownButton',
};

export const Simple = () => (
  <Provider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
    theme={{
      colors: {
        secondary: 'blue',
        muted: '#aaa',
        background: '#eed',
        accent: 'orange',
      },
    }}
  >
    <>
      <UpdownButton id="simple-example" namespace="stories" />
      <div style={{ fontSize: '20px' }}>
        <UpdownButton id="simple-example" namespace="stories" />
      </div>
      <div style={{ fontSize: '30px' }}>
        <UpdownButton id="simple-example" namespace="stories" />
      </div>
    </>
  </Provider>
);

export const Reddit = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <UpdownButton
        id="reddit-example"
        namespace="stories"
        component={UpdownButton.themes.Reddit}
      />
      <div style={{ fontSize: '20px' }}>
        <UpdownButton
          id="reddit-example"
          namespace="stories"
          component={UpdownButton.themes.Reddit}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <UpdownButton
          id="reddit-example"
          namespace="stories"
          component={UpdownButton.themes.Reddit}
        />
      </div>
    </>
  </Provider>
);
