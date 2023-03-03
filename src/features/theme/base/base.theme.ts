import createTheme, {ThemeOptions} from "@mui/material/styles/createTheme";

export const baseThemeOptions: ThemeOptions = {
    breakpoints: {
        values: {
            "xs": 640,
            "sm": 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
        },
    },
}