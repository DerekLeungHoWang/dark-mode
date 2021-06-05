import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useDarkMode } from './components/useDarkMode';
import { darkTheme, lightTheme } from './components/Themes';
import { GlobalStyles } from './Globalstyle';
import Navbar from './components/Navbar/Navbar';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';


function App() {
  const [data, setData] = useState([]);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">

          <Router>
            <Navbar />

            <Switch>
              <Route path={"/"} render={() => (
                <HomePage themeToggler={themeToggler} theme={theme}   />
              )} >
              </Route>

            </Switch>

          </Router>


        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
