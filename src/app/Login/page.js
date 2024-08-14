'use client'
import React from 'react'
import './styles.css'
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();

    const handleGoogleLogin = () => {
      const authUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/HandleAuth';
      window.location.href = authUrl;
    };
  return (
 <div>

    {/* header */}
    <div className='header-login'>
    <div className="login-logo"></div>
  </div>

{/* login */}
<div className="login">
  <div className="login-main">

    <div className="w-[380px] h-[103px] flex flex-col justify-center items-center gap-32px  ml-10 mt-5 login-account">    
    <h1 className="content-heading">Create a new account</h1>

   <div className=" custom-paragraph mt-5 " onClick={handleGoogleLogin}>
   <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo" className="google-image" />
     <p className="sign-up cursor-pointer">Sign up with Google</p>
   </div>
    </div>
 
  <div className="w-[380px] h-[97px] gap-[24px] mt-14 ml-32"> 
    <button className="custom-button">Create an Account</button>

    <p className="custom-signup">Already have an account? Sign In</p>
    </div>


  </div>
</div>


  </div>
  )
}

export default Login