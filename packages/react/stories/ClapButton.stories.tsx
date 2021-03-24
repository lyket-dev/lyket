import * as React from 'react';
import { ClapButton } from '../src';
import { Provider, ThemedProvider } from './utils/testProvider';

export default {
  title: 'ClapButton',
};

export const Simple = () => (
  <>
    <Provider>
      <ClapButton id="simple-example" namespace="stories" />
      <div style={{ fontSize: '20px' }}>
        <ClapButton id="simple-example" namespace="stories" />
      </div>
    </Provider>
    <ThemedProvider>
      <div style={{ fontSize: '40px' }}>
        <ClapButton id="simple-example" namespace="stories" />
      </div>
    </ThemedProvider>
  </>
);

export const Heart = () => (
  <div style={{ marginTop: '100px' }}>
    <Provider>
      <div
        style={{
          fontSize: '30px',
          marginRight: '50px',
          display: 'inline',
        }}
      >
        <ClapButton
          id="clap-heart-fir"
          namespace="stories"
          component={ClapButton.templates.Heart}
        />
      </div>
      <div
        style={{
          fontSize: '30px',
          marginRight: '50px',
          display: 'inline',
          fontFamily: 'Papyrus',
        }}
      >
        <ClapButton
          id="clap-heart-med"
          namespace="stories"
          component={ClapButton.templates.Heart}
        />
      </div>
    </Provider>
    <ThemedProvider>
      <div style={{ fontSize: '30px', marginRight: '20px', display: 'inline' }}>
        <ClapButton
          id="clap-heart-big"
          namespace="stories"
          component={ClapButton.templates.Heart}
        />
      </div>
    </ThemedProvider>
  </div>
);

export const Medium = () => (
  <Provider>
    <>
      <div
        style={{ marginTop: '100px', marginBottom: '20px', fontSize: '20px' }}
      >
        <ClapButton
          id="medium-example"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
      <div style={{ marginBottom: '20px', fontSize: '30px' }}>
        <ClapButton
          id="medium-example-mid"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
      <div style={{ marginBottom: '20px', fontSize: '60px' }}>
        <ClapButton
          id="medium-example-big"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
    </>
  </Provider>
);

export const Custom = () => (
  <Provider>
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
