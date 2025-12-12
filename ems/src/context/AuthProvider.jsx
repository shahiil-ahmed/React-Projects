import { createContext, useState } from "react"
import { getLocalStorage } from "../utilts/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
    useEffect(() => {

        const {employee, admin} = getLocalStorage();
        setUserData({employee, admin});
        
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={"Shahil Ahmed"}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider