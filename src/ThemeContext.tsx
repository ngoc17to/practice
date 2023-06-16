import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
type ThemeContextReturnType = {
    theme: string
    toggleTheme: () => void
    setTheme: (theme: string) => void
}
const ThemeContext = createContext<ThemeContextReturnType>({} as ThemeContextReturnType);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) =>
{
    const intialTheme = localStorage.getItem('MYAPP_THEME');
    console.log(intialTheme);
    const [theme, setTheme] = useState<string>((intialTheme === null) ? 'light' : intialTheme);
    const toggleTheme = () =>
    {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    useEffect(() =>
    {
        localStorage.setItem('MYAPP_THEME', theme);
        if (theme === 'light')
        {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
        else
        {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
type useThemeType = () => ThemeContextReturnType
const useTheme: useThemeType = () =>
{
    const context = useContext(ThemeContext);
    return context;
};

export { ThemeProvider, useTheme };
