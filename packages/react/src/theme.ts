export type ThemeRecord = {
  colors?: Colors;
  fonts?: Record<string, string>;
  fontWeights?: Record<string, number>;
};

type Colors = {
  background?: string;
  text?: string;
  primary?: string;
  secondary?: string;
  accent?: string;
  highlight?: string;
  muted?: string;
};

export const defaultTheme: ThemeRecord = {
  colors: {
    background: '#e0e0e0',
    text: '#292929',
    primary: '#22c1c3',
    secondary: '#ff00c3',
    accent: '#fcff4b',
    highlight: '#e095ed',
    muted: '#aaa',
  },
  fonts: {
    body: 'inherit',
    heading: 'inherit',
    monospace: 'inherit',
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
};
