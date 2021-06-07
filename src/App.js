import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { useEffect, useMemo, useRef, useState } from 'react';
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
import gsap from 'gsap';

const Circle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(3% at 350px 280px);
  color: blue;
  font-size: 40px;
  font-weight: 1000;
  z-index: -1;
`
const MyButton = styled.button`
  color: red;
 
  z-index: 999;


`
const Cont = styled.button`
position: fixed;
 
top: 10%;
  

`

function App() {
  const [data, setData] = useState([]);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  let circle = useRef();
  let tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {

    tl.current.to(circle.current, {
      clipPath: "circle(141%  at 350px 280px )",
      duration: .8,
    })

  }, [])
  useEffect(() => {
 
    if(theme==='light'){
      tl.current.play()

    }else{
      tl.current.reverse()
    }



  }, [theme])

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">

          <Router>
            <Navbar />

            <Switch>
              <Route path={"/"} render={() => (
                <HomePage  themeToggler={themeToggler} theme={theme} />
              )} >
              </Route>

            </Switch>

          </Router>
          <Circle ref={circle} />
          <Cont>
            <MyButton
              onClick={() => tl.current.play()}
            >play</MyButton>

            <MyButton
              onClick={() => tl.current.reverse()}
            >rev</MyButton>
          </Cont>

        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
