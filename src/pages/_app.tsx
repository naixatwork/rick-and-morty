import { NextPageContext } from "next";
import type { AppProps } from "next/app";

import Header from "#/features/layout/Header";
import { darkTheme } from "#/features/theme/dark/dark.theme";
import "#/styles/globals.css";
import parseCookieString from "#/utils/parseCookieString";

import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import RouterLoading from "#/features/loading/RouterLoading";

interface WidthCookiesProps extends AppProps {
    cookies: Record<string, string>;
}

export default function App({
    Component,
    pageProps,
    cookies,
}: WidthCookiesProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header cookies={cookies || {}}></Header>
                <main className="h-full overflow-auto pt-28">
                    <Component {...pageProps} cookies={cookies} />
                </main>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

App.getInitialProps = async ({
    Component,
    ctx,
}: {
    Component: any;
    ctx: NextPageContext;
}) => {
    const cookies: Record<string, string> = parseCookieString(
        ctx.req?.headers.cookie || "",
    );

    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, cookies };
};
