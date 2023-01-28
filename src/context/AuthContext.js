import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);


  let loginUser = async ({email, password}) => {

    let response = await fetch('http://127.0.0.1:8000/accounts/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'email' : email,
            'password' : password,
        }),
    })
    let data = await response.json();
    console.log(data)
    if (response.status === 200) {
      
      setAuthTokens(data);    
      setUser(jwtDecode(data.access));
      localStorage.setItem('tokens', JSON.stringify(data));

    }
    else {
      alert('Something went wrong. Please try again later.')
    }
    return response;
  };

  let contextData = {
    user:user,
    loginUser:loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
