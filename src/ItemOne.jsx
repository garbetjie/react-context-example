import React, { Fragment, useContext } from 'react';
import AppContext from './AppContext';
import AuthContext from './AuthContext';

export default function ItemOne() {
    return (
            <AppContext.Consumer>{({count, increment, decrement}) => (
                <AuthContext.Consumer>{({auth, doAuth, doNotAuth}) => (
                    <Fragment>
                    <hr />
                    <h1>Item one</h1>
                    <p>Current count: {count}</p>
                    <button onClick={() => { decrement(); doNotAuth(); }}>-</button>
                    &nbsp;
                    <button onClick={() => { increment(); doAuth(); }}>+</button>
                    <b>
                        Authed: {auth}
                    </b>
                    </Fragment>
                )}</AuthContext.Consumer>
            )}</AppContext.Consumer>
    );
};