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
        text: 'blue',
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
        pressUp,
        pressDown,
        totalScore,
        userVoteDirection,
        isCounterVisible,
        isLoading,
      }) => (
        <>
          <button onClick={pressUp} disabled={isLoading}>
            Of course! 🍕🍕🍕
          </button>
          <button onClick={pressDown} disabled={isLoading}>
            I am a bad person
          </button>
          {isCounterVisible && <p>Total: {totalScore}</p>}
          <p>Your vote: {userVoteDirection}</p>
        </>
      )}
    </UpdownButton>
  </Provider>
);
