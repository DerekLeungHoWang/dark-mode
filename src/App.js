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
import About from './/components/DummyPages/About'
import Products from './/components/DummyPages/Products'
import Opportunities from './/components/DummyPages/Opportunities'
import Contact from './/components/DummyPages/Contact'

const Circle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0px;
  left: 0px;
  clip-path: circle(1% at 14% 30%);
  color: blue;
  font-size: 40px;
  font-weight: 1000;
  z-index: -1;
`
const MyButton = styled.button`
  color: red;
  


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
      clipPath: "circle(141%  at 14% 30% )",
      duration: .8,
    })

  }, [])
  useEffect(() => {

    if (theme === 'light') {
      tl.current.play()

    } else {
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
                <HomePage themeToggler={themeToggler} theme={theme} />
              )} >
              </Route>
              <Route path={"/about"} render={() => (
                <About />
              )} >
              </Route>
              <Route path={"/products"} render={() => (
                 <Products/>
              )} >
              </Route>
              <Route path={"/opportunities"} render={() => (
                    <Opportunities/>
              )} >
              </Route>
              <Route path={"/contact"} render={() => (
               <Contact/>
              )} >
              </Route>

            </Switch>

          </Router>
          <Circle ref={circle} />
          {/* <Cont>
            <MyButton
              onClick={() => tl.current.play()}
            >play</MyButton>

            <MyButton
              onClick={() => tl.current.reverse()}
            >rev</MyButton>
          </Cont> */}

        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
