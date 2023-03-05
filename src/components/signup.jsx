import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { LogoLight30 } from '../assets/taskylogos'
import { InputField } from '../components/utilitycomponents/form-inputs'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HiOutlineRefresh } from "react-icons/hi"
const SignUpForm = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [formState, setformState] = useState({ loading: false, error: null });
    if (user) {
        return <Navigate to={'/profile'} />
    }
    if (loading) {
        return (
            <div className="h-screen w-full bg-zinc-900 backdrop-blur-lg grid place-content-center">
                <HiOutlineRefresh className='text-2xl text-yellow-400 animate-spin' />
            </div>
        )
    }
    const handleFormSubmit = async (values) => {
        setformState({ ...formState, loading: true });
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
        } catch (err) {
            setformState({ ...formState, loading: false, error: err.code });
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
                            Create an account
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
                                confirm_password: '',
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email("invalid email format")
                                    .required('required'),
                                password: Yup.string()
                                    .required('required')
                                    .min(6, "password should be 6 characters or more"),
                                confirm_password: Yup.string()
                                    .required('required')
                                    .min(6, "password should be 6 characters or more")
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                                <InputField
                                    label="Confirm Password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                />
                                <div className="px-2">
                                    <button
                                        type="submit"
                                        className={"px-3 py-2 mt-2 w-full bg-slate-600 hover:bg-slate-700 rounded-md duration-150 ease-in"} >
                                        {formState.loading ? <HiOutlineRefresh className='text-lg w-full text-center animate-spin' /> : 'Sign up'}
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>

                    <div className=" mt-3 flex justify-center space-x-2 text-base text-slate-400 font-light select-none">
                        <span >Already have an account?</span>
                        <Link to={'/login'}
                            className="text-blue-300" >
                            Sign in
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};


export default SignUpForm;


