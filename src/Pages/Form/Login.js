import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginWithEmailAndPassword, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        loginWithEmailAndPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
               alert('Login Successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Login Successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <>

            <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
                <div className="mx-auto h-full sm:w-max">
                    <div className="m-auto py-20">
                        <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Login To Your Account</h3>
                            <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                                <button onClick={handleGoogleSignIn}
                                    className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                                    <div className="w-max mx-auto flex items-center justify-center space-x-4">
                                        <img src="https://img.icons8.com/color/512/google-logo.png" className="w-5" alt="" />
                                        <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
                                        >Login With Google</span>
                                    </div>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(handleLogin)} className="mt-10 space-y-8 dark:text-white">
                                <div>
                                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                        <input
                                            {...register("email", {
                                                required: "Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                }
                                            })} name="email"
                                            type="email" placeholder="Your Email" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                        <input
                                            {...register("password", {
                                                required: "Required",
                                                minLength: {
                                                    value: 8,
                                                    message: "password must be 8 characters"
                                                }
                                            })} name="password"
                                            type="password" placeholder="Your Password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" autoComplete='false' />
                                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                                    </div>
                                    <p className="-mr-3 w-max p-3">
                                        <span className="text-sm tracking-wide text-orange-600 dark:text-sky-400">{loginError}</span>
                                    </p>
                                </div>

                                <div>
                                    <button
                                        className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                                    >
                                        <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                    </button>
                                    <Link to='/signup' type="reset" className="-ml-3 w-max p-3">
                                        <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
                            <div className="space-x-4 text-center">
                                <span>&copy; Orbit Zone</span>
                                <Link className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Contact</Link>
                                <Link className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Privacy & Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;