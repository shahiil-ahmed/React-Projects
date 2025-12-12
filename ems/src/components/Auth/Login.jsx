import { useState } from "react";


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex h-screen w-screen justify-center items-center'>

        <div className='border-2 rounded-xl border-emerald-600 p-20'>

            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex items-center flex-col justify-center'>


                <input 
                required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                className='text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent' 
                type="email" 
                placeholder='Enter Your Email' />

                <input 
                required 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                className='text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent mt-3' 
                type="password" 
                placeholder='Enter Your Password' />

                <button className='text-white text-lg border-none outline-none mt-7 bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-8 cursor-pointer w-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login