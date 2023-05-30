import { createContext, useState, useEffect, ReactNode } from 'react'

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
  },
};

interface Type{
  theme:{
    foreground: string;
    background: string;
  };
  toggleTheme: () => void;
}

interface Props{
  children: ReactNode;
}

// Let our context know what properties to expect
export const ThemeContext = createContext<Type>({
  theme: themes.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((previousValue) => 
        previousValue === themes.dark ? themes.light : themes.dark);
    };

    useEffect(() => {
          document.body.style.backgroundColor = theme.background;
          document.body.style.color = theme.foreground;
        }, [theme]);

    return(
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
    
};