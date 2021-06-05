import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('dark');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        console.log('toggling');
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler]
};