import * as React from 'react';
import { Provider, LikeButton } from '../src';

export default {
  title: 'LikeButton',
};

export const Simple = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
    <LikeButton id="simple-example" namespace="stories" />
  </Provider>
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
  if (button.attributes.user_has_liked) {
    alert('Thanks for your support 🥳');
  } else {
    alert('Why the change of mind? 🧐');
  }
};

export const Twitter = () => (
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
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
  <Provider apiKey="xxx" baseUrl="http://localhost:3000">
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
