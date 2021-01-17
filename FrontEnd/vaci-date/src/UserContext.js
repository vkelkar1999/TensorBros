import React, {useContext, useState, useEffect } from "react";

export  const UserContext = React.createContext(null);

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [currentEmail, setEmail] = useState()
    const [currentPhoneNumber, setPhoneNumber] = useState()
    const [currentZipCode, setZipCode] = useState()


  
    const value = {
      currentUser,
      currentEmail,
      currentPhoneNumber,
      currentZipCode,
      setCurrentUser,
      setEmail,
      setPhoneNumber,
      setZipCode

    }
  
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    )
  }

