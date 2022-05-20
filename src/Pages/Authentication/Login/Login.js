import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../CustomHooks/UseToken';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [updatePassword, updating, UPError] = useUpdatePassword(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || UPError) {
        errorMessage = error.message || UPError.message;
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPass = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        await updatePassword(email);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center font-semibold text text-primary text-2xl'>Please Login!!</h1>
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetPass} href="/" className="label-text-alt link link-hover">Forgot password? click to reset</a>
                                </label>
                            </div>
                            <p className='text-red-500'><small>{errorMessage}</small></p>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                            <p><small>New to doctors portal? <Link className='text-primary' to="/register">Creat a Account</Link></small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;