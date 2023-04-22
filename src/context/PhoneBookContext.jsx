import { createContext, useReducer } from "react";

const initialState = {
    contacts: [
        { firstName: 'John', lastName: 'Doe', phoneNumber: '1234567' },
        { firstName: 'Pepito', lastName: 'Perez', phoneNumber: '0987654' }
    ]
}

export const actions = {
    ADD_CONTACT: "ADD_CONTACT",
}

export const PhoneBookContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_CONTACT: 
            return {
                ...state,
                contacts: [...state.contacts, action.phoneFormData ]
            }
    }
}

const PhoneBookContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        contacts: state.contacts,
        addContact: (phoneFormData) => {
            dispatch({ type: actions.ADD_CONTACT, phoneFormData })
        }
    }

    return (
            <PhoneBookContext.Provider value={value}>
                {children}
            </PhoneBookContext.Provider>
    )
}

export default PhoneBookContextProvider

