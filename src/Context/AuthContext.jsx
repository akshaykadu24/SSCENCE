import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [change, setChange] = useState(false);
  const [mail, setMail] = useState("");

  const toggleAuth = (el = "") => {
    setIsAuth(!isAuth);
    setMail(el);
  };
  const toggleChange = () => {
    setChange(!change);
  };

  return (
    <AuthContext.Provider
      value={{ mail, isAuth, toggleAuth, toggleChange, change }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
