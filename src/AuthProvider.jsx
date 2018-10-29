import React, {useState} from 'react';
import AuthContext from './AuthContext';

export default function({ children }) {
    const [auth, setAuth] = useState('false');

    const fakeState = {
        auth,
        doAuth: () => {
            setAuth('true');
        },
        doNotAuth: () => {
            setAuth('false');
        },
    };

    return (
        <AuthContext.Provider value={fakeState}>{children}</AuthContext.Provider>
    );
}