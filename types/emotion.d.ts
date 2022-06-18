import '@emotion/react';
import { colorTheme } from '../styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends colorTheme {}
}
