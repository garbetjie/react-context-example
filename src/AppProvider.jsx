import React, {useState} from 'react';
import AppContext from './AppContext';

export default function({ children }) {
    const [count, setCount] = useState(parseInt(window.localStorage.getItem('count')) || 0);

    const fakeState = {
        count,
        increment: () => {
            setCount(count + 1);
            window.localStorage.setItem('count', count + 1);
        },
        decrement: () => {
            setCount(count - 1);
            window.localStorage.setItem('count', count - 1);
        },
    };

    return (
        <AppContext.Provider value={fakeState}>{children}</AppContext.Provider>
    );
}