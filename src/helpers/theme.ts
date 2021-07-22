import { createMuiTheme } from "@material-ui/core";

const appTheme = (darkMode: boolean) => createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

export default appTheme;