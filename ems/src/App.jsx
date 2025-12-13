
import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import { getLocalStorage, setLocalStorage } from './utilts/localStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData.employees)

  const handleLogin = (email, password) => {
    if(email === 'admin@gmail.com' && password === '1234'){
      setUser('admin')
    } else if(email === 'user@gmail.com' && password === '4321'){
      setUser('employee')
    } else{
      alert('Invalid Credentials')
    }
  }
  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard />}
    {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App