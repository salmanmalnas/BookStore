import React from 'react';
import { useForm } from "react-hook-form";
import Signup from './Signup';
import { Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <div className="">
        <dialog id="my-modal" className="modal">
            <div className="modal-box w-[340px] p-4 dark:bg-slate-900 dark:text-white">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById('my-modal').close()}>
                  ✕
                </Link>
                <h3 className="font-bold text-lg">Login</h3>
                
                {/* Email*/}
                <div className="mb-4 mt-4">
                    <span className="mb-2">Email</span> <br />
                    <input {...register("email", { required: true })} type="email" placeholder=" Enter your Email" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white" />
                    <br/>{errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                {/* Password*/}
                <div className="mb-4">
                    <span className="mb-2">Password</span> <br />
                    <input {...register("password", { required: true })} type="password" placeholder=" Enter your Password" className="border rounded-md px-2 dark:bg-slate-900 dark:text-white dark:border-white " />
                    <br/>{errors.password && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* Button*/}
                <div className="flex justify-around">
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 duration-200 rounded-md px-3 py-1">Login</button>
                    <p>Not Registerd? {""}
                      <Link to="/Signup" className="uderline text-blue-500 ">Signup</Link> {""}
                    </p>
                </div>
              </form>
            </div>
        </dialog>
      </div>
    </>
  )
}

export default Login
