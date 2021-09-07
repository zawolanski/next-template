import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xxs: number;
      xs: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    font: {
      family: {
        roboto: string;
        sourceCode: string;
      };
      weight: {
        light: number;
        regular: number;
        bold: number;
      };
    };
    color: {
      primary: string;
      secondary: string;
      text: {
        normal: string;
      };
    };
    radius: number;
  }
}
