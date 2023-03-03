import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
    palette: {
        mode: "dark",
    },
    breakpoints: {
        values: {
            "xs": 640,
            "sm": 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
        },
    },
});
