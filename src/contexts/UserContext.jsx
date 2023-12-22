import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (userData) => {
    setUserProfile(userData);
    if(userData)
      setIsLoggedIn(true);
  };

  const logOut = () => {
    setUserProfile(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ userProfile, isLoggedIn, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
