import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../theme/GlobalStyle";
import {AppTheme} from "../theme/AppTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle hasNoFocus={true}/><Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
