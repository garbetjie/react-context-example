import React, { Fragment, useContext } from 'react';
import AppContext from './AppContext';

export default function ItemOne() {
	return (
		<AppContext.Consumer>{({count, increment, decrement}) => (
			<Fragment>
				<hr />
				<h1>Item two</h1>
				<p>Current count: {count}</p>
				<button onClick={() => decrement()}>-</button>
				&nbsp;
				<button onClick={() => increment()}>+</button>
			</Fragment>
		)}</AppContext.Consumer>
	);
};