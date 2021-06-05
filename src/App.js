import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useDarkMode } from './components/useDarkMode';
import { darkTheme, lightTheme } from './components/Themes';
import { GlobalStyles } from './Globalstyle';
import Toggle from './components/Toggler';

function App() {
  const [data, setData] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <h2>TEST</h2>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
