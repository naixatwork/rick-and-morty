import type { AppProps } from "next/app";

import { dark } from "#/features/theme/dark";
import "#/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={dark}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}