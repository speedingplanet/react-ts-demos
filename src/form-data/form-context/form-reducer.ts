import type { FormState } from './FormWithContextAndReducer';

export interface Action {
	type: string;
	value: string;
}

export function reducer(state: FormState, action: Action) {
	switch (action.type) {
		case 'change_firstName':
			return { ...state, firstName: action.value };
		case 'change_lastName':
			return { ...state, lastName: action.value };
		case 'change_city':
			return { ...state, city: action.value };
		case 'change_state':
			return { ...state, state: action.value };
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
}
