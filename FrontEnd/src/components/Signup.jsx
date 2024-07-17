import React from 'react'
import { useForm } from "react-hook-form";
import Login from './Login'
import { Link } from 'react-router-dom'

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
      <div className="grid h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="w-[300px]">
            <div className=" modal-box dark:bg-slate-900 dark:text-white p-4 border-[2px] rounded">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    
                    {/* Full name*/}
                    <div className="mb-4 mt-4">
                        <span className="mb-2">Your Name</span> <br />
                        <input {...register("name", { required: true })} type="text" placeholder=" Enter your full name" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white " />
                        <br/>{errors.name && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    {/* Mobile*/}
                    <div className="mb-4 mt-4">
                        <span className="mb-2">Mobile Number</span> <br />
                        <input {...register("number", { required: true })} type="number" placeholder=" Enter your mobile number" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white " />
                        <br/>{errors.number && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    {/* Email*/}
                    <div className="mb-4 mt-4">
                        <span className="mb-2">Email</span> <br />
                        <input {...register("email", { required: true })} type="email" placeholder=" Enter your Email Id" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white " />
                        <br/>{errors.email && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    {/* Password*/}
                    <div className="mb-4">
                        <span className="mb-2">Password</span> <br />
                        <input {...register("password", { required: true })} type="password" placeholder=" Enter your Password" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white " />
                        <br/>{errors.password && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    {/* Button*/}
                    <div className="flex items-center space-x-2">
                        <button type="submit" className="bg-orange-500 hover:bg-orange-700 duration-200 rounded-md px-1 py-1">Signup</button>
                        <p className="text-sm p-2">Have Account? 
                        <a className="uderline text-blue-500 cursor-pointer"
                        onClick={()=>
                            document.getElementById("my-modal").showModal()
                        }
                        >
                            ‎ Login
                        </a>
                        <Login />
                        </p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
