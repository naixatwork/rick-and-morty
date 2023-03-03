import type { AppProps } from "next/app";

import { darkTheme } from "#/features/theme/dark/dark.theme";
import "#/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}