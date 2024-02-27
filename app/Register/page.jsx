import { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import wretch from "wretch";
import { ThreeDots } from 'react-loading-icons'
import { DeployedURL } from '../components/Constants';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [imgUploadMsg, setImgUploadMsg] = useState(null);
  const [successMgs, setSuccessMgs] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const RegisterMutation = useMutation({
    mutationFn: async (data) => {
      wretch(`${DeployedURL}/users/register`)
        .post(data).json()
        .then((data) => {
          setSuccessMgs(data);
          setTimeout(() => setSuccessMgs(false), 4000);
          navigate(`/login`);
        })
        .catch(error => { setError(error); setTimeout(() => setError(false), 3000); })
    }
  })

  const onSubmit = async (data) => {
    RegisterMutation.mutate(data);
  };
  return (
    <main className='bg-base-200 mt-60px'>
      {
        RegisterMutation.isLoading ?
          (
            <ThreeDots stroke="#98ff98" strokeOpacity={.125} speed={.75} />
          ) : (
            error ? (
              <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                <div><span className='text-2xl'>😒</span>
                  <span>Error! {error?.message}</span>
                </div>
              </div >
            ) : (
              successMgs && (
                <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                  <div><span className='text-2xl'>😁</span>
                    <span>User registered Successfully</span>
                  </div>
                </div>
              )
            )
          )
      }
      <div className="hero-content">
        <h1 className="text-5xl font-bold xs:text-4xl registerHeader">✍️  Register now!</h1>
      </div>
      <div className="hero  bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card ">
              <div className='card-header'>
                <div className="avatar grid">

                </div>
              </div>
              <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                <div>
                  <label className="label"><span className="label-text">Full Names</span></label>
                  <input type="text" {...register("name", { required: true })} placeholder="Enter your names" className="input input-bordered " />
                  {errors.name?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">fullname is required 😶</p>}
                  <label className="label"><span className="label-text">Email</span></label>
                  <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })} type="text" placeholder="Enter your email" className="input input-bordered" />
                  {errors.email?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">email is required 😶</p>}{errors.email?.type === 'pattern' && <p className="label-text-alt text-red-400 pt-2">invalid email😶</p>}
                  <label className="label"><span className="label-text">Phone</span></label>
                  <input {...register("phone", { required: true, })} type="text" placeholder="Enter your Phone no:" className="input input-bordered" />
                  {errors.phone?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">phone is required 😶</p>}{errors.phone?.type === 'pattern' && <p className="label-text-alt text-red-400 pt-2">invalid phone</p>}
                </div>
                <div className='md:ml-4 lg:ml-4'>
                  <label className="label"><span className="label-text">Gender</span></label>
                  <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                    <option selected disabled value="" >Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">gender is required 😶</p>}

                  <label className="label"><span className="label-text">Medical level</span></label>
                  <select {...register("medical_level", { required: true })} className="select select-bordered w-full max-w-xs">
                    <option selected disabled value="">Select level</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Nurses">Nurse</option>
                    <option value="Sergon">Surgon</option>
                  </select>
                  {errors.medical_level?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">medical level is required 😶</p>}
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="text" {...register("password", { required: true })} placeholder="Choose your Password" className="input input-bordered " />
                  {errors.password?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">password is required 😶</p>}
                </div>

              </div>
              <div className="form-control mt-3 grid">
                <button type="submit" className="btn btn-outline max-w-md place-self-center w-full">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main >
  )
}

export default Register;