import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <button onClick={() => signInWithGoogle()} className="btn btn-primary w-full">Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;