

// const UserContextProvider=() =>{
    
// }
// export default UserContextProvider

// jo bhi prop aa rahe h uske use kr lo =children, kuch or bhi name use kr sakte h

// const UserContextProvider = ({children}) =>{

// return (

// <UserContext>

// {children}

// </UserContext>
// )
// wrapping krni padegi or ek value access krni padegi , property .Provider valur {{user , setUser}} 
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider