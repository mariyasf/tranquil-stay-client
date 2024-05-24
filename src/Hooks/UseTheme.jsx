import { useEffect, useState } from 'react';

const UseTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    return [theme, setTheme];
};

export default UseTheme;