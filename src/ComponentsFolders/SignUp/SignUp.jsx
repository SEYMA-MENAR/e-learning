import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import registerImage from "./Images/registerImg.svg";

const SignUp = () => {
  const yupValidation = Yup.object().shape({
    username: Yup.string()
      .required("Please enter username.")
      .min(6, "Add minimum 6 characters"),
    email: Yup.string().required("Email is required").email(),
    password: Yup.string()
      .required("Please enter a password.")
      .min(6, "Password must be at least 6 characters"),
    // confirm: Yup.string()
    //   .required('Please confirm password.')
    //   .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // JSON.stringify(data, null, 4);
    // navigate('/thankyou', { replace: true, state: thanksProps });
    // return false;
    console.log(data);
  }

  return (
    <div className="flex lg:flex-row flex-col w-full font-poppins">
      <div className="pl-10 pt-10 pr-10 basis-1/2 flex ">
        <img src={registerImage} alt="registerImg" />
      </div>
      <div className="pl-10 pt-10 pr-10 flex flex-col justify-center text-center basis-1/2 ">
        <h3 className="text-2xl">Welcome to lorem!</h3>
        <div className="mt-6 flex flex-row self-center text-center bg-[#92D6D6] p-2 text-white justify-center rounded-full w-96">
          <div className="basis-1/2 self-center">Login</div>
          <div className="basis-1/2 bg-[#49BBBD] rounded-full p-2">
            Register
          </div>
        </div>
        <div className="flex flex-col mt-6 self-center">
          <p className="text-left text-lg">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry.
          </p>
        </div>

        <div className="mt-12">
          <form
            className="mb-0 mt-4 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label>
                <div className="text-left font-bold tracking-wider pl-2">
                  Email Address
                </div>
                {/* <span className="lg:text-xl text-sm">{t('t-create.f1')}</span> */}
                <input
                  name="username"
                  type="text"
                  className={`bg-gray-50 mt-4 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1  ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  {...register("username")}
                />
              </label>
              <div className="invalid-feedback text-red-400 lg:text-base text-sm">
                {errors.username?.message}
              </div>
            </div>

            <div className="form-group">
              <label>
                <div className="text-left font-bold tracking-wider pl-2">
                  User Name
                </div>
                {/* <span className="lg:text-xl text-sm">{t('t-create.f1')}</span> */}
                <input
                  name="username"
                  type="text"
                  className={`bg-gray-50 mt-4  border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1  ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  {...register("username")}
                />
              </label>
              <div className="invalid-feedback text-red-400 lg:text-base text-sm">
                {errors.username?.message}
              </div>
            </div>

            <div className="form-group">
              <label>
                <div className="text-left font-bold tracking-wider pl-2">
                  Password
                </div>
                {/* <span className="lg:text-xl text-sm">{t('t-create.f1')}</span> */}
                <input
                  name="username"
                  type="text"
                  className={`bg-gray-50 mt-4  border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1  ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  {...register("username")}
                />
              </label>
              <div className="invalid-feedback text-red-400 lg:text-base text-sm">
                {errors.username?.message}
              </div>
            </div>
          </form>
        </div>
        <div className="self-end">
          <button className="flex bg-[#92D6D6] hover:bg-[#49BBBD] justify-center text-white text-lg rounded-full mt-6 w-60 p-2">Register</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
