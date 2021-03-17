import * as React from 'react';
import { LikeButton } from '../src';
import { Provider, ThemedProvider } from './utils/testProvider';

export default {
  title: 'LikeButton',
};

export const Simple = () => (
  <Provider>
    <div style={{ fontSize: '20px' }}>
      <LikeButton id="simple-example" namespace="stories" />
    </div>
  </Provider>
);

export const Chevron = () => (
  <>
    <Provider>
      <div style={{ fontSize: '10px' }}>
        <LikeButton
          id="chevron-example"
          namespace="stories"
          component={LikeButton.templates.Chevron}
        />
      </div>
      <div style={{ fontSize: '20px' }}>
        <LikeButton
          id="chevron-example"
          namespace="stories"
          component={LikeButton.templates.Chevron}
          hideCounterIfLessThan={1}
        />
      </div>
    </Provider>
    <ThemedProvider>
      <div style={{ fontSize: '80px' }}>
        <LikeButton
          id="chevron-example"
          namespace="stories"
          component={LikeButton.templates.Chevron}
          hideCounterIfLessThan={1}
        />
      </div>
    </ThemedProvider>
  </>
);

const onLoad = async data => {
  const foo = new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 250);
  });

  console.log('response', await foo);
};

const onPress = button => {
  if (button.attributes.userHasLiked) {
    alert('Thanks for your support 🥳');
  } else {
    alert('Why the change of mind? 🧐');
  }
};

export const Twitter = () => (
  <Provider>
    <>
      <LikeButton
        id="twitter-example-small"
        namespace="stories"
        onLoad={onLoad}
        onPress={onPress}
        component={LikeButton.templates.Twitter}
      />
      <div style={{ fontSize: '20px' }}>
        <LikeButton
          id="twitter-example-med"
          namespace="stories"
          component={LikeButton.templates.Twitter}
        />
      </div>
      <div style={{ fontSize: '30px' }}>
        <LikeButton
          id="twitter-example-big"
          namespace="stories"
          component={LikeButton.templates.Twitter}
        />
      </div>
    </>
  </Provider>
);

export const Custom = () => (
  <Provider>
    <LikeButton
      id="custom-button"
      namespace="stories"
      onLoad={onLoad}
      onPress={onPress}
    >
      {({
        handlePress,
        totalLikes,
        userLiked,
        isLoading,
        isCounterVisible,
      }) => (
        <>
          <button onClick={handlePress} disabled={isLoading}>
            Of course! 🍕🍕🍕
          </button>
          {isCounterVisible && <div>Total: {totalLikes}</div>}
          {userLiked && <div>Thanks for your vote!</div>}
        </>
      )}
    </LikeButton>
  </Provider>
);
