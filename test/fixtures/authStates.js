export const initialState = {
    status: 'checking', // 'checking', 'autheticated', 'not-autheticated
    user: {},
    errorMessage: null,
}

export const authenticatedState =  {
    status: 'authenticated', 
    user: {
        uid: '12345678',
        name: 'Manuel'
    },
    errorMessage: undefined,
}

export const notAuthenticatedState =  {
    status: 'notAuthenticated', 
    user: {},
    errorMessage: undefined,
}