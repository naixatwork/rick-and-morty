import { baseThemeOptions } from "#/features/theme/base/base.theme";

import { createTheme } from "@mui/material/styles";


export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    ...baseThemeOptions
});