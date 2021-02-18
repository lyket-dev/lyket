import * as React from 'react';
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
        primary: '#BFFCED',
        secondary: '#FBDEFB',
        text: 'grey',
        background: '#eed',
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
        component={UpdownButton.templates.Reddit}
      />
      <div style={{ fontSize: '20px' }}>
        <UpdownButton
          id="reddit-example"
          namespace="stories"
          component={UpdownButton.templates.Reddit}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <UpdownButton
          id="reddit-example"
          namespace="stories"
          component={UpdownButton.templates.Reddit}
        />
      </div>
    </>
  </Provider>
);

export const Custom = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <UpdownButton id="custom" namespace="stories">
      {({
        handlePressUp,
        handlePressDown,
        totalScore,
        userVoteDirection,
        isCounterVisible,
        isLoading,
      }) => (
        <>
          <button onClick={handlePressUp} disabled={isLoading}>
            Of course! 🍕🍕🍕
          </button>
          <button onClick={handlePressDown} disabled={isLoading}>
            I am a bad person
          </button>
          {isCounterVisible && <p>Total: {totalScore}</p>}
          <p>Your vote: {userVoteDirection}</p>
        </>
      )}
    </UpdownButton>
  </Provider>
);
