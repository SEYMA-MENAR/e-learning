import React from 'react'
import registerImage from "./Images/registerImg.svg"

const SignUp = () => {
  return (
    <div className='flex lg:flex-row flex-col w-full font-poppins'>
      <div className='pl-10 pt-10 pr-10 basis-1/2 flex '>
        <img src={registerImage} alt="registerImg" />
      </div>
      <div className='pl-10 pt-10 pr-10 flex flex-col justify-center text-center basis-1/2 '>
        <h3>Welcome to lorem!</h3>
        <div className='mt-6 flex flex-row self-center text-center bg-[#92D6D6] p-2 text-white justify-center rounded-full w-96'>
          <div className='basis-1/2 self-center'>Login</div>
          <div className='basis-1/2 bg-[#49BBBD] rounded-full p-2'>Register</div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div>form input</div>
        <div>register button</div>
      </div>
    </div>
  )
}

export default SignUp
