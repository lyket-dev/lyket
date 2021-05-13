import * as React from 'react';
import { Provider, LikeButton } from '../src';

export default {
  title: 'DisableSessionId',
};

export const DisableSessionId = () => {
  React.useEffect(() => window.localStorage.removeItem('lyket-session-id'), []);

  return (
    <Provider apiKey="yyy" baseUrl="http://localhost:3000" disableSessionId>
      <div style={{ fontSize: '20px' }}>
        <LikeButton id="disable-session-like" namespace="stories" />
      </div>
    </Provider>
  );
};
