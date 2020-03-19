import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    //console.log(auth.signInWithGoogle);
    return (
        <div>
            <h1>This is login area</h1>
            
             <form action="">
               <button type="submit" onClick={auth.signInWithGoogle}>Signin With Google</button>
            </form>

        </div>
    );
};

export default Login;