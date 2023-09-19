import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [purpleMode, setPurpleMode] = useState(true);

    const togglePurpleMode = () => {
        setPurpleMode(!purpleMode);
    };

    return (
        <ThemeContext.Provider value={{ purpleMode, togglePurpleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// #761ebf