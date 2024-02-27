import { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
// import { Context } from '../context/Context';
import reset from "../images/reset.png";
import { Context } from '../context/Context';



function ResetPassword() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  // const { dispatch } = useContext(Context);





  return (
    <div className='grid mt-60px bg-base-200 h-fit resetPage'>

      <div className="hero-content flex-col lg:flex-row-reverse justify-around ">
        <div className="hero-content ">
          < div className="card flex-shrink-0  max-w-sm shadow-2xl p-2  place-self-center" >
            <div className="card-header">
              <h3 className="text-4xl font-bold  px-2 xs:text-3xl">Reset Password 🔐 </h3>
            </div>
            <div className="card-body">
              <form  >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-3xl">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-warning input-lg input-bordered" />
                  {errors.email?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">email is required 😶</p>}
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-outline btn-warning">Reset </button>
                </div>
              </form>
            </div>
          </div >
        </div>
        <div className="hero-content ">
          <img alt='no pic' src={reset} className=" resetImg max-w-lg rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
