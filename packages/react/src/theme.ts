export type ThemeRecord = {
  colors?: Colors;
  fonts?: Fonts;
};

type Colors = {
  icon?: string;
  text?: string;
  background?: string;
  primary?: string;
  secondary?: string;
  highlight?: string;
};

type Fonts = {
  body?: string;
};

export const defaultTheme: ThemeRecord = {
  colors: {
    icon: '#292929',
    background: 'transparent',
    text: '#292929',
    primary: '#BFFCED',
    secondary: '#FBDEFB',
    highlight: '#e095ed',
  },
  fonts: {
    body: 'inherit',
  },
};
