import React from 'react';
import { Provider, ClapButton } from '../src';

export default {
  title: 'ClapButton',
};

export const Simple = () => (
  <Provider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
    theme={{
      colors: {
        primary: 'red',
        secondary: 'blue',
        text: '#292929',
        muted: '#aaa',
        background: '#eed',
        highlight: 'green',
        accent: 'orange',
      },
    }}
  >
    <>
      <ClapButton id="simple-example" namespace="stories" />
      <div style={{ fontSize: '20px' }}>
        <ClapButton id="simple-example" namespace="stories" />
      </div>
      <div style={{ fontSize: '40px' }}>
        <ClapButton id="simple-example" namespace="stories" />
      </div>
    </>
  </Provider>
);

export const Medium = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <ClapButton
        id="medium-example"
        namespace="stories"
        component={ClapButton.templates.Medium}
      />
      <div style={{ fontSize: '20px' }}>
        <ClapButton
          id="medium-example"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <ClapButton
          id="medium-example"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
    </>
  </Provider>
);
