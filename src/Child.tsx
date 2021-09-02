import React from 'react'
import { useState } from 'react';
import { Theme, useTheme } from './ThemeContext';

interface Prop {
    getName: (arg0: string) => void;
}

export const Child = (prop: Prop) => {

    const [name, setName] = useState<string>('');
    const { theme, setTheme } = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input type='text' name='name' placeholder='Enter Name' onChange={handleChange} style={{ height:'30px', width:'50%' }}/>
            <button
                onClick={() => prop.getName(name)}
                className={`${theme === 'Dark' ? 'button-dark' : 'button'}`}>
                Submit
            </button>
            <button
                onClick={() => theme === 'Dark' ? setTheme(Theme.Light) : setTheme(Theme.Dark)}
                className={`${theme === 'Dark' ? 'button-dark' : 'button'}`}>
                Change Theme
            </button>
        </div>
    )
}
