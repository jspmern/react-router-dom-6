import { createContext, useContext, useState } from "react";
export let authContext=createContext({login:null})
function AuthContext({children}) {
    let [login,setLogin]=useState(false)
    function loginHandler()
    {
        setLogin(!login)
    }
    return <authContext.Provider value={{login,loginHandler}}>
                {children}
    </authContext.Provider>
}
export default AuthContext
export let  useAuth=()=>{
   return useContext(authContext)
    
}

