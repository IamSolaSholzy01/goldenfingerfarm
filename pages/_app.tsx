import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../theme/GlobalStyle";
import {AppTheme} from "../theme/AppTheme";
import Public from "../layouts/Public";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle hasNoFocus={true}/>
          <Public title={pageProps.title}><Component {...pageProps} /></Public>
      </ThemeProvider>
  )
}

export default MyApp
