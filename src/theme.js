import { createMuiTheme } from '@material-ui/core/styles';
import { red, lightBlue, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: '#ffffff'
    },
    secondary: {
      main: blueGrey[900]
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
