import React , { useEffect }from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import BlogContainer from "./Containers/BlogContainer";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/blog'>
              <BlogContainer/>
            </Route>
            <Route path='*'>
              <h1>Page not Found</h1>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
