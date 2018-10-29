import { useState, useReducer, useContext } from 'react';

const setIt = window.localStorage.setItem;
const getIt = window.localStorage.getItem;

const initial = {
	count: window.localStorage.getItem('count') || 0
};

const reducer = (state, action) => {
	switch(action) {
		case 'reset':
			window.localStorage.setItem('count', initial.count);
			return initial;
		case 'inc':
			window.localStorage.setItem('count', state.count + 1);
			return {count: state.count + 1};
		case 'dec':
			window.localStorage.setItem('count', state.count - 1);
			return {count: state.count - 1};
	}
};

export default function useSharedCount() {
	return null;
	// const context = useContext(Counter);

	// return [context.count, () => { context.increment() }];
};