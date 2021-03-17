import * as React from 'react';
import { UpdownButton } from '../src';
import {
  Provider,
  ThemedProviderContrast,
  ThemedProvider,
} from './utils/testProvider';

export default {
  title: 'UpdownButton',
};

export const Simple = () => (
  <>
    <Provider>
      <UpdownButton id="simple-example-sm" namespace="stories" />
    </Provider>

    <ThemedProvider>
      <div style={{ marginBottom: '40px', fontSize: '40px' }}>
        <UpdownButton id="simple-example-md" namespace="stories" />
      </div>
    </ThemedProvider>

    <ThemedProviderContrast>
      <div style={{ marginBottom: '40px', fontSize: '60px' }}>
        <UpdownButton id="simple-example-bg" namespace="stories" />
      </div>
    </ThemedProviderContrast>
  </>
);

export const Reddit = () => (
  <Provider>
    <>
      <UpdownButton
        id="reddit-example-sm"
        namespace="stories"
        component={UpdownButton.templates.Reddit}
      />
      <div style={{ marginBottom: '40px', fontSize: '20px' }}>
        <UpdownButton
          id="reddit-example-md"
          namespace="stories"
          component={UpdownButton.templates.Reddit}
        />
      </div>
      <div style={{ marginBottom: '40px', fontSize: '30px' }}>
        <UpdownButton
          id="reddit-example-bg"
          namespace="stories"
          component={UpdownButton.templates.Reddit}
        />
      </div>
    </>
  </Provider>
);

export const Custom = () => (
  <Provider>
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
