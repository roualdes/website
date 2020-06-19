import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, orange, red, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue.A400,
        },
        secondary: {
            main: orange.A400,
        },
        error: {
            main: red.A400,
        },
        background: {
            paper: "#fafafa",
            default: "#fafafa",
        },
        text: {
            primary: "#616161",
            secondary: "#9e9e9e",
        }

    },
});

export default theme;
