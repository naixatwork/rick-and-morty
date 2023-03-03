import '@/src/styles/globals.css'
import { CssBaseline } from '@mui/material'
import {StyledEngineProvider} from '@mui/material/styles'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
        </StyledEngineProvider>
    )
}
