'use client'
import { useState } from "react"

export default function Login() {
  const [state, setState] = useState("Sign Up")
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onSubmitHandler=(e:any)=>{
e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form action="" onSubmit={onSubmitHandler}>
      <div className="w-[476px] h-[538px] rounded-[20px] bg-white border border-neutral-300 p-8 shadow-[0px_20px_50px_rgba(95,111,255,0.1)]">
        <p className="text-[26px] font-semibold text-gray-600">{state === "Sign Up"?"Create Account":"Login"}</p>
        <p className="mt-1 text-lg text-gray-600">Please {state==='Sign Up'?"sign up":"login"} to book appointment</p>
{
  state==="Sign Up" && (
 <div className="mt-6">
          <label className="block text-base text-gray-600 mb-1">Full Name</label>
          <input
          name="name"
            type="text"
            className="w-full h-[42px] px-3 rounded border border-[#dadada]"
            value={account.name}
            onChange={(e) => setAccount({ ...account, name: e.target.value })}
          />
        </div>
  )
}
       

        <div className="mt-4">
          <label className="block text-base text-gray-600 mb-1">Email</label>
          <input
          name="email"
            type="email"
            className="w-full h-[42px] px-3 rounded border border-[#dadada]"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <label className="block text-base text-gray-600 mb-1">Password</label>
          <input
          name="password"
            type="password"
            className="w-full h-[42px] px-3 rounded border border-[#dadada]"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
        </div>

        <button className="mt-6 w-full h-[46px] rounded-md bg-[#5f6fff] text-white text-lg font-medium">
         {state === "Sign Up"?"Create Account":"Login"}
        </button>
{
  state==="Sign Up"?

        <p className="mt-4 text-base text-gray-600 text-center">
          Already have an account?{" "}
          <span onClick={(e)=>setState("Login")} className="text-[#5f6fff] cursor-pointer">Login here</span>
        </p>: <p className="mt-4 text-base text-gray-600 text-center">
          Create an account?{" "}
          <span onClick={(e)=>setState("Sign Up")} className="text-[#5f6fff] cursor-pointer">Click here</span>
        </p>
}
      </div>
      </form>
    </div>
  )
}
