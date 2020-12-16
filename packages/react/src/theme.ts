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
  highlight?: string;
};

export const defaultTheme: ThemeRecord = {
  colors: {
    background: 'transparent',
    text: '#292929',
    primary: '#22c1c3',
    secondary: '#ff00c3',
    highlight: '#e095ed',
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
