import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = responsiveFontSizes(createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#043aa7',
            light: '#2363e2',
            contrastText: '#d4eefb',
        },
        secondary: {
            main: '#2f2f2f',
            light: '#656565',
            contrastText: '#d9d9d9'
        },
        success: {
            main: '#31aa67',
            light: '#5bbb87',
        },
        dark: {
            main: '#000',
        }
    },
    typography: {
        fontFamily: '"Poppins", "Lato", "Arial", sans-serif',
        fontSize: 14,
    },
    shape: {
        borderRadius: 4,
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
        MuiDrawer: {
            backgroundColor: 'primary',
        }
    },
    spacing: 8,
} as never));


export default theme;

export type MyTheme = typeof theme



// blue, black and white
// primary: {
//     main: '#0077b6',
//     light: '#91d9ff',
//     contrastText: '#cdeeff',
// },
// secondary: {
//     main: '#2f2f2f',
//     light: '#656565',
//     contrastText: '#d9d9d9'
// },

// orange, black, white
// primary: {
//     main: '#ff7034',
//     light: '#f2f0f1',
//     contrastText: '#fafafa',
// },
// secondary: {
//     main: '#262626',
//     light: '#e4dde0',
//     contrastText: '#fafafa'
// },




// import { createTheme, responsiveFontSizes } from "@mui/material";


// const theme = responsiveFontSizes(createTheme({
//     palette: {
//         type: 'light',
//         primary: {
//             main: '#172367',
//             light: '#bad7e9',
//             contrastText: '#fcffe7',
//         },
//         secondary: {
//             main: '#eb455f',
//         },
//         success: {
//             main: '#31aa67',
//             light: '#5bbb87',
//         },
//         dark: {
//             main: '#000',
//         }
//     },
//     typography: {
//         fontFamily: '"Poppins", "Lato", "Arial", sans-serif',
//         fontSize: 14,
//     },
//     shape: {
//         borderRadius: 4,
//     },
//     overrides: {
//         MuiSwitch: {
//             root: {
//                 width: 42,
//                 height: 26,
//                 padding: 0,
//                 margin: 8,
//             },
//             switchBase: {
//                 padding: 1,
//                 '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
//                     transform: 'translateX(16px)',
//                     color: '#fff',
//                     '& + $track': {
//                         opacity: 1,
//                         border: 'none',
//                     },
//                 },
//             },
//             thumb: {
//                 width: 24,
//                 height: 24,
//             },
//             track: {
//                 borderRadius: 13,
//                 border: '1px solid #bdbdbd',
//                 backgroundColor: '#fafafa',
//                 opacity: 1,
//                 transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//             },
//         },
//     },
//     props: {
//         MuiTooltip: {
//             arrow: true,
//         },
//         MuiDrawer: {
//             backgroundColor: 'primary',
//         }
//     },
//     spacing: 8,
// } as never));


// export default theme;