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

export const Medium = () => (
  <Provider>
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
