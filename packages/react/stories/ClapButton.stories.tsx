import React from 'react';
import { Provider, ClapButton } from '../src';

export default {
  title: 'ClapButton',
};

export const Simple = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <ClapButton id="everybody-clap-now" namespace="homepage" />
      <div style={{ fontSize: '20px' }}>
        <ClapButton id="everybody-clap-now" namespace="homepage" />
      </div>
      <div style={{ fontSize: '40px' }}>
        <ClapButton id="everybody-clap-now" namespace="homepage" />
      </div>
    </>
  </Provider>
);

export const Medium = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <>
      <ClapButton
        id="everybody-clap-now"
        namespace="homepage"
        component={ClapButton.themes.Medium}
      />
      <div style={{ fontSize: '20px' }}>
        <ClapButton
          id="everybody-clap-now"
          namespace="homepage"
          component={ClapButton.themes.Medium}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <ClapButton
          id="everybody-clap-now"
          namespace="homepage"
          component={ClapButton.themes.Medium}
        />
      </div>
    </>
  </Provider>
);
