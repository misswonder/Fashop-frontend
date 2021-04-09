export const initialState = {
    emailInput: '',
    passwordInput: ''
}

export const LoginReducer = (state, action) => {
    switch (action.type) {
			case 'SET_EMAIL_INPUT':
				return {
					...state,
					textInput: action.email,
				};
			case 'SET_PASSWORD_INPUT':
				return {
					...state,
					passwordInput: action.password,
				};
			default:
				return state;
		}
}