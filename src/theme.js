import { createMuiTheme } from '@material-ui/core/styles'
import { red, lightBlue, blueGrey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { fontSize: '4rem', fontWeight: 700 },
    h2: { fontSize: '2.125rem', fontWeight: 500 },
    h3: { fontSize: '1.625rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.3rem' },
    button: { textTransform: 'none' },
  },
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blueGrey[900],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
