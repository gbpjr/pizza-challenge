import { createTheme } from '@mui/material/styles'

const black: string = '#333333'
const gray: string = '#2B3743'
const darkGray: string = '#151B21'
const white: string = '#FFFFFF'

const MainTheme = createTheme({
  palette: {
    primary: {
      main: `${gray}`,
      dark: `${darkGray}`,
      light: '#FEAC28',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      dark: `${black}`,
      light: '#526A82',
      contrastText: `${black}`
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Bodoni',
      fontSize: '56px',
      color: `${white}`,
      letterSpacing: '3px',
    },
    subtitle1: {
      color: `${white}`
    },
    fontFamily: [
      'Work Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiTypography: {
        styleOverrides: {
            root: {
                wordWrap: "break-word"
            },
        },
  }},
})

export { MainTheme }