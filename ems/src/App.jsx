
import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import { getLocalStorage, setLocalStorage } from './utilts/localStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'shahil@gmail.com' && password == '1234'){
      setUser('admin')
    } else if(email == 'user@gmail.com' && password == '4321'){
      setUser('employee')
    } else{
      alert('Invalid Credentials');
    }
  }

  const data = useContext(AuthContext);
  console.log(data);
  
  return (
    <>
    {!user ?  <Login handleLogin={handleLogin}/> : ''};
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App