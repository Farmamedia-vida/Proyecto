import { createContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import roles from "../helpers/roles";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const history = useHistory()

    const login = (userCredentials, fromLocation) => {
        setUser({id :1, name: 'pepe', email: 'starboy@ll.com', role: roles.admin});
        if(fromLocation) {
            history.push(fromLocation)    
        }
        
    }
    
    const logout = () => setUser(null)

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
