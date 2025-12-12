
import { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import { getLocalStorage, setLocalStorage } from './utilts/localStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'shahil@gmail.com' && password == '1234'){
      console.log("This is admin")
    } else if(email == 'user@gmail.com' && password == '4321'){
      console.log("This is user");
    } else{
      alert('Invalid Credentials');
    }
  }

  
  return (
    <>
    {!user ?  <Login handleLogin={handleLogin}/> : ''};
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
    </>
  )
}

export default App