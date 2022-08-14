import React, { useState } from "react";

const useValue = () => {
    const [token, setToken] = useState('');
    return {token, setToken };
};

const AuthContext = React.createContext({} as ReturnType<typeof useValue>);

const AuthProvider = ({ children } : { children: any }) => {
    return <AuthContext.Provider value={useValue()}></AuthContext.Provider>
}

export{ AuthContext, AuthProvider }