

const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("From Submitted");
    }
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex items-center flex-col justify-center'>
                <input required className='text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent' type="email" placeholder='Enter Your Email' />
                <input required className='text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent mt-3' type="password" placeholder='Enter Your Password' />
                <button className='text-white text-lg border-none outline-none mt-7 bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-8 cursor-pointer w-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login