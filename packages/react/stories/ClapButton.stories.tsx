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
        primary: 'rgba(36, 252, 201, 0.4)',
        secondary: 'blue',
        text: 'black',
        background: 'rgba(, 0.5)',
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

export const Custom = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <ClapButton id="custom-clap" namespace="stories" hideCounterIfLessThan={2}>
      {({
        handlePress,
        totalClaps,
        userClaps,
        isLoading,
        isCounterVisible,
      }) => (
        <>
          <button onClick={handlePress} disabled={isLoading}>
            Of course! 🍕🍕🍕
          </button>
          {isCounterVisible && <div>Total: {totalClaps}</div>}
          <div>You clapped {userClaps} times</div>
        </>
      )}
    </ClapButton>
  </Provider>
);
