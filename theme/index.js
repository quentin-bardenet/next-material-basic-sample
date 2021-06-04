import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./palette";

const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: palette["dark"],
    layout: {
      contentWidth: "90%",
    },
    typography: {
      fontFamily: "Lato",
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: "white",
        },
      },
    },
  })
);

const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: palette["light"],
    layout: {
      contentWidth: "90%",
    },
    typography: {
      fontFamily: "Lato",
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: "white",
        },
      },
    },
  })
);

const theme = {
  dark: darkTheme,
  light: lightTheme,
};

export default theme;
