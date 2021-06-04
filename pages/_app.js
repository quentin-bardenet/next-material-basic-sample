import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme/index";
import { useMediaPredicate } from "react-media-hook";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const mode = useMediaPredicate("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme[mode]}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
