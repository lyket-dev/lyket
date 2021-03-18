import * as React from 'react';
import { LikeButton, ClapButton, UpdownButton } from '../src';
import { Provider } from './utils/testProvider';

export default {
  title: 'All',
};

const onLoad = async data => {
  const foo = new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 250);
  });

  console.log('testing onLoad', await foo);
};

const onPress = button => {
  if (button.attributes.userHasLiked) {
    console.log('pressed 🥳');
  } else {
    console.log('pressed 🧐');
  }
};

export const All = () => (
  <Provider>
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
    >
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <LikeButton
          id="all-like"
          namespace="stories"
          onLoad={onLoad}
          onPress={onPress}
        />
      </div>
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <LikeButton
          id="all-tw-like"
          namespace="stories"
          component={LikeButton.templates.Twitter}
        />
      </div>
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <LikeButton
          id="all-chev-like"
          namespace="stories"
          component={LikeButton.templates.Chevron}
        />
      </div>
    </div>
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
    >
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <ClapButton id="all-clap" namespace="stories" />
      </div>
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <ClapButton
          id="all-med-clap"
          namespace="stories"
          component={ClapButton.templates.Medium}
        />
      </div>
      <div style={{ marginLeft: '20px', fontSize: '30px' }}>
        <ClapButton
          id="all-he-clap"
          namespace="stories"
          component={ClapButton.templates.Heart}
        />
      </div>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{ marginBottom: '20px', marginLeft: '20px', fontSize: '30px' }}
      >
        <UpdownButton id="all-ud" namespace="stories" />
      </div>
      <div
        style={{ marginBottom: '20px', marginLeft: '20px', fontSize: '30px' }}
      >
        <UpdownButton
          id="all-chev-ud"
          namespace="stories"
          component={UpdownButton.templates.Chevron}
        />
      </div>
      <div
        style={{ marginBottom: '20px', marginLeft: '20px', fontSize: '30px' }}
      >
        <UpdownButton
          id="all-red-ud"
          namespace="stories"
          component={UpdownButton.templates.Reddit}
        />
      </div>
    </div>
  </Provider>
);
