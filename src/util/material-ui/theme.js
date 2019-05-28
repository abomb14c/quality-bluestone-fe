import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 88,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
      },
    },
  },
  palette: {
    primary: {
      main: '#4b35ee',
    },
    secondary: {
      main: '#ee4035',
    },
  },
});

export default theme;
