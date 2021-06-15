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
import useElementSize from './components/Util/use-element-size';

const Circle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0px;
  left: 0px;
  clip-path: ${props => {

    let x = props.buttonData.detail.x
    let y = props.buttonData.detail.y
    
   return `circle(0px at 14% 30%)`

    //return `circle(0px at ${x}px ${y}px)`
  }};
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
  let button = useRef(null)
  const [dimension, setDimension] = useState({})
  let buttonData = useElementSize(button)
  let x = buttonData.detail.x
  let y = buttonData.detail.y

  useEffect(() => {

    tl.current.to(circle.current, {
      clipPath: `circle(141%  at 14% 30% )`,
      duration: .8,
    })
  }, [])


 
  useEffect(() => {
 
    if (theme === 'light') {
 
      tl.current.play()

    } else {
      tl.current.reverse()
   //   circle.current.style.clipPath=`circle(10px at ${x?x+20:20}px ${y?y+25:30}px)`
      console.log( circle.current.style.clipPath);
    }



  }, [theme])

//   useEffect(() => {
//  circle.current.style.clipPath=`circle(10px at ${x}px ${y}px)`
//     console.log( circle.current.style.clipPath);

//   }, [x,y])
//   useEffect(() => {
//     console.log(buttonData);
   
//      }, [buttonData])
  
//   console.log(x);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">

          <Router>
            <Navbar />

            <Switch>
              <Route exact path={"/"} render={() => (
                <HomePage ref={button} themeToggler={themeToggler} theme={theme} />
              )} >
              </Route>
              <Route path={"/about"} render={() => (
                <About />
              )} >
              </Route>
              <Route path={"/products"} render={() => (
                <Products />
              )} >
              </Route>
              <Route path={"/opportunities"} render={() => (
                <Opportunities />
              )} >
              </Route>
              <Route path={"/contact"} render={() => (
                <Contact />
              )} >
              </Route>

            </Switch>

          </Router>
          <Circle buttonData={buttonData} ref={circle} />
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
