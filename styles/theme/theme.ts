import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    xxs: 0,
    xs: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  font: {
    family: {
      roboto: 'Roboto',
      sourceCode: 'Source Code Pro',
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  color: {
    primary: '#202C36',
    secondary: '#2B3844',
    text: {
      normal: '#FFFFFF',
    },
  },
  radius: 5,
};

export default theme;
