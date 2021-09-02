import React from 'react';
import { useState } from 'react';
import './App.css';
import { Child } from './Child';
import { Theme, ThemeContext } from './ThemeContext';

function App() {

  const [name, setName] = useState<string>('');
  const [theme, setTheme] = React.useState(Theme.Light)

  const getName = (n: string) => {
    setName(n);
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`${theme ==='Dark' ? 'App-dark' : 'App'}`}>
        <Child getName={getName} />
        <h1 className={`${theme === 'Dark' && 'h1-dark'}`}>{name}</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
