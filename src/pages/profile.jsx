import { Children } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase-config";
import clsx from "clsx";
import {
    HiOutlineRefresh,
    HiOutlineArrowLeft,
    HiOutlineLogout,
} from "react-icons/hi"
import { Navigate, useNavigate } from "react-router-dom";
export default function UserProfile() {
    const [user] = useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);
    const navigate = useNavigate();
    if (loading) {
        if (loading) {
            return (
                <div className="h-screen w-full bg-zinc-900 backdrop-blur-lg grid place-content-center">
                    <div className="">
                        <HiOutlineRefresh className='text-2xl text-yellow-400 animate-spin' />
                        <h1 className="text-center text-xl font-normal font-mono">Signing out...</h1>
                    </div>
                </div>
            )
        }
    }
    if (user) {
        return (
            <div className="h-screen w-full">
                <div className="md:w-3/4 mx-auto p-2">

                    <div className="py-4 flex justify-between items-center ">
                        <button type="button"
                            className="px-3 py-2 relative group hover:bg-slate-600 hover:bg-opacity-50 flex space-x-2 items-center duration-150 ease-in rounded-lg"
                            onClick={() => {
                                console.log("click")
                                navigate('/dashboard');
                            }} >
                            <HiOutlineArrowLeft />
                            <span className="absolute w-20 text-center bg-slate-800 bg-opacity-40 rounded-lg px-2 py-1 left-8 top-10 text-xs font-light hidden font-mono group-hover:block">back</span>

                        </button>
                        <h2 className="font-normal font-sans text-2xl">Profile</h2>
                        <button type="button"
                            className="px-3 py-2 relative group hover:bg-slate-600 hover:bg-opacity-50 flex space-x-2 items-center duration-150 ease-in rounded-lg"
                            onClick={async () => {
                                const success = await signOut();
                                if (success) {
                                    return <Navigate to={'/login'} />
                                }
                            }}>
                            <HiOutlineLogout className="text-xl" />
                            <span className="absolute w-20 text-center bg-slate-800 bg-opacity-40 rounded-lg px-2 py-1 right-8 top-10 text-xs font-light hidden font-mono group-hover:block">sign out</span>
                        </button>
                    </div>

                    <div className="my-4">
                        <div className="">
                            <Avatar imgUrl={user.photoURL} />
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-xl">{user.displayName}</h2>
                            <h2 className="font-base text-lg text-slate-500">{user.email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export function Avatar({ imgUrl, ...props }) {
    return (
        <img
            // img to be chaged later.
            src={imgUrl ? imgUrl : "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
            className={clsx("rounded-full shadow-lg",
                "w-48 mx-auto",
            )}
            alt="Avatar"
            {...props}
        />
    )
}