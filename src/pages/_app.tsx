import { useEffect } from "react";

import { NextPageContext } from "next";
import type { AppProps } from "next/app";

import Header from "#/features/layout/Header";
import { darkTheme } from "#/features/theme/dark/dark.theme";
import "#/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";


interface WidthCookiesProps extends AppProps {
    cookies: Record<string, string>;
}

export default function App({ Component, pageProps, cookies }: WidthCookiesProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header cookies={cookies || {}}></Header>
                <main className="overflow-auto h-full pt-32">
                    <Component {...pageProps} cookies={cookies} />
                </main>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

App.getInitialProps = async ({ Component, ctx }: { Component: any; ctx: NextPageContext }) => {
    let pageProps = {};
    let cookies: Record<string, string> = {};

    if (ctx.req && ctx.req.headers.cookie) {
        ctx.req.headers.cookie.split(';').forEach((cookie: string) => {
            const [name, value] = cookie.split('=');
            cookies[name.trim()] = value.trim();
        });
    }

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, cookies };
};