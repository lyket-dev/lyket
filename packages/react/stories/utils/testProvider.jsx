import * as React from 'react';
import { Provider as LyketProvider } from '../../src';

export const ThemedProvider = ({ children }) => (
  <LyketProvider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
    theme={{
      colors: {
        primary: '#fed8b1',
        secondary: '#eeccff',
        text: 'grey',
        icon: 'black',
        background: 'rgba(243, 255, 135, 0.8)',
        highlight: 'orange',
      },
      fonts: {
        body: 'monospace',
      },
    }}
  >
    {children}
  </LyketProvider>
);

export const ThemedProviderContrast = ({ children }) => (
  <LyketProvider
    apiKey="xxx"
    baseUrl="http://localhost:3000"
    theme={{
      colors: {
        primary: 'blue',
        secondary: 'red',
        text: 'black',
        background: 'aliceblue',
        highlight: 'orange',
      },
    }}
  >
    {children}
  </LyketProvider>
);

export const Provider = ({ children }) => (
  <LyketProvider apiKey="xxx" baseUrl="http://localhost:3000">
    {children}
  </LyketProvider>
);
