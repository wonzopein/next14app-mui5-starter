'use client'

import {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import {createTheme, CssBaseline, THEME_ID, ThemeProvider} from "@mui/material";

const materialTheme = createTheme({
    typography:{
      fontFamily: 'Inter, sans-serif'
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                size: 'small',
            }
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
            }
        },
        MuiInputLabel: {
            defaultProps: {
                size: 'small',
            }
        },
        MuiSlider: {
            defaultProps: {
                size: 'small',
            }
        },
        MuiSelect: {
            defaultProps: {
                size: 'small',
            }
        },
        MuiInputBase: {
            defaultProps: {
                size: 'small',
            }
        }
    }
});

export default function ThemeRegistry({children}: {children:ReactNode}) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true}}>
            <CssBaseline />
            <ThemeProvider theme={{ [THEME_ID]:materialTheme }}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}