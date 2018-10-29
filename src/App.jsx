import ItemOne from './ItemOne.jsx';
import ItemTwo from './ItemTwo.jsx';
import React, { Fragment, useContext } from 'react';
import AppProvider from './AppProvider';
import AppContext from './AppContext';
import AuthProvider from './AuthProvider';

export default function App() {
	return (
		<Fragment>
			<AppProvider>
				<AuthProvider>
					<h1>
						Context is currently <AppContext.Consumer>{({count}) => <Fragment>{count}</Fragment>}</AppContext.Consumer>
					</h1>
					<ItemOne />
					<ItemTwo />
				</AuthProvider>
			</AppProvider>
		</Fragment>
	);
}