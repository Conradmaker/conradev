const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};
export type colorTheme = {
  primary: {
    1: string;
  };
  background: {
    primary: string;
    modal: string;
  };
  text: {
    primary: string;
    lighten: string;
    reverse: string;
  };
  viewPortSize: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const common = {
  primary: {
    1: '#3949ab',
  },
  viewPortSize: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
};
export interface ThemeType {
  dark: colorTheme;
  light: colorTheme;
}
export const theme: ThemeType = {
  dark: {
    ...common,
    background: {
      primary: '#2B2B2B',
      modal: '#2B2B2B',
    },
    text: {
      primary: '#fffff',
      lighten: '#E1DFDC',
      reverse: '#2B2B2B',
    },
    viewPortSize: {
      mobile: `(max-width: ${size.mobile})`,
      tablet: `(max-width: ${size.tablet})`,
      desktop: `(max-width: ${size.desktop})`,
    },
  },
  light: {
    ...common,
    background: {
      primary: '#2B2B2B',
      modal: '#2B2B2B',
    },
    text: {
      primary: '#fff',
      lighten: '#E1DFDC',
      reverse: '#2B2B2B',
    },
  },
};
export const breakPoint = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};
export default theme;
