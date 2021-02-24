import * as React from 'react';
import { Provider, LikeButton, ClapButton, UpdownButton } from '../src';

export default {
  title: 'Recaptcha',
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
    alert('Thanks for your support 🥳');
  } else {
    alert('Why the change of mind? 🧐');
  }
};

export const Recaptcha = () => (
  <Provider
    apiKey="yyy"
    baseUrl="http://localhost:3000"
    recaptchaSiteKey="6Le0F6gZAAAAAJpX2mBwupNnmqYiPUHofHrjHpW7"
  >
    <div style={{ fontSize: '20px' }}>
      <LikeButton
        id="recaptcha-like"
        namespace="stories"
        onLoad={onLoad}
        onPress={onPress}
      />
    </div>
    <div style={{ fontSize: '20px' }}>
      <ClapButton id="recaptcha-clap" namespace="stories" />
    </div>
    <div style={{ fontSize: '20px' }}>
      <UpdownButton id="recaptcha-ud" namespace="stories" />
    </div>
  </Provider>
);
