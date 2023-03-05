import clsx from 'clsx';
import { Form, Formik, } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { LogoLight30 } from '../assets/taskylogos'
import { InputField } from '../components/utilitycomponents/form-inputs'
import { FcGoogle } from "react-icons/fc"
import { HiOutlineRefresh } from "react-icons/hi"
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';






const SignInForm = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [formState,setformState] = useState({loading:false,error:null});
    if (user) {        
        return <Navigate to={'/dashboard'} />
    }
    if(loading){
        return(
            <div className="h-screen w-full bg-zinc-900 backdrop-blur-lg grid place-content-center">
                <HiOutlineRefresh className='text-2xl text-yellow-400 animate-spin'/>
            </div>
        )
    }
    const SignInUsingGoogle = async (e) => {
        console.log(e.target);
    }
    const handleFormSubmit = async (values) => {
        setformState({...formState,loading:true});
        try{
            await signInWithEmailAndPassword(auth,values.email, values.password);            
        }catch(err){
            setformState({...formState,loading:false,error:err.code});
            console.log('signin error');
        }
    }
    return (
        <>
            <div className="h-[90vh] w-full flex justify-center ">
                <div className="min-w-[18rem] max-w-[22rem] py-2 m-2 mt-20">
                    <div className=" my-6 flex justify-center">
                        <Link to={'/home'}
                            className="block w-28" >
                            <LogoLight30 />
                        </Link>
                    </div>
                    <div className="my-4">
                        <h2 className="text-xl font-light font-sans text-center select-none  text-slate-300">
                            Sign into Account
                        </h2> 
                    </div>

                    {formState.error &&
                        <div className='bg-rose-500 select-none px-3 py-2 rounded-lg my-2 '>
                            <span className="text-sm font-light">{formState.error.replaceAll('auth/', '').replaceAll('-', ' ')}</span>
                        </div>}


                    <div className=" py-3 bg-gray-600 bg-opacity-20 rounded-lg">
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    // .email("invalid email format")
                                    .required('required'),
                                password: Yup.string()
                                    .required('required')                                    
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                handleFormSubmit(values);
                            }}
                        >
                            <Form className='space-y-2'>
                                <InputField
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <InputField
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                />

                                <div className="px-2">
                                    <button type="submit" className={"px-3 py-2 mt-3 w-full bg-slate-600 hover:bg-slate-700 rounded-md duration-150 ease-in"} >
                                        {formState.loading ? <HiOutlineRefresh className='text-lg w-full text-center animate-spin' /> : 'Sign in'}
                                    </button>
                                </div>
                                <span className={clsx(
                                    "flex justify-center select-none",
                                    "font-extralight  font-mono text-gray-500 text-sm  px-4",
                                    "before:content-['--------']",
                                    "before:px-4 after:px-4",
                                    "after:content-['--------']",
                                )}>or</span>
                                <div className="px-2 ">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            SignInUsingGoogle(e);
                                        }}
                                        className={"flex justify-center items-center space-x-4 px-3 py-2 w-full bg-slate-600 hover:bg-slate-700 rounded-md duration-150 ease-in"} >
                                        <span>Sign in using Google</span>
                                        <FcGoogle className='text-2xl' />
                                    </button>
                                </div>

                            </Form>
                        </Formik>
                    </div>

                    <div className=" mt-3 flex justify-center space-x-2 text-base text-gray-600 font-light select-none">
                        <span >Don't have an account?</span>
                        <Link to={'/register'}
                            className="text-blue-300" >
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};


export default SignInForm;


