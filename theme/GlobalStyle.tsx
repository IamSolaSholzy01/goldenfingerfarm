import { AppThemeType } from "./AppTheme";
import { createGlobalStyle } from 'styled-components'

export interface ThemeWrapper {
    theme: AppThemeType;
    hasNoFocus: boolean;
}

/**
 * GlobalStyle: injects global CSS
 *
 * hasNoFocus prop controls removing outline for all elements.
 */
export const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  @font-face {
    font-family: Space;
    src: url('/fonts/Space_Grotesk/SpaceGrotesk_VariableFont_wght.ttf') format('truetype-variations');
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: Space, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
    color: #333;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${(props: { hasNoFocus: any; }) => props.hasNoFocus && ":focus { outline: none; }"}
`;
