import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    leave: [
        {
            taken: 1,
            label: "Sick Leave",
          },
          {
            taken: 2,
            label: "Casual Leave",
          },
          {
            taken: 3,
            label: "Earned Leave",
          },
    ]
}

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

return(
    <GlobalContext.Provider value={{
        taken:state.taken
    }}>
        {children}
    </GlobalContext.Provider>
)
}
