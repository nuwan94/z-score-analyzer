import { Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import Loading from "components/Loading";
import NavBar from "components/NavBar";
import Stepper from "components/Stepper";
import appTheme from "helpers/theme";
import React, { Suspense, useState } from "react";

// import firebase from "helpers/firebase";
import "./global.scss";
import "./helpers/i18n";

const App = () => {
  // const [scores, setScores] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  // const ref = firebase.firestore().collection("z-scores");

  // useEffect(() => {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items: any = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setScores(items);
  //     setLoading(false);
  //   });
  // }, [ref]);

  // if (loading) {
  //   loaderEle()
  // }

  return (
    <Suspense fallback={Loading}>
      <ThemeProvider theme={appTheme(darkMode)}>
        <CssBaseline />

        <Grid container direction="column">
          <Grid item>
            <NavBar
              theme={darkMode}
              toggleTheme={() => {
                setDarkMode(!darkMode);
              }}
            />
          </Grid>
          <Grid item>
            <Container maxWidth="lg">
              <Stepper />
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
