import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>This is login area</h1>
            <form action="">
                <input type="email" name="email" id="" placeholder="Enter your email here" />
                <input type="password" name="password" id="" placeholder="Enter your password here" />
                <button type="submit">LOGIN</button>
            </form>

        </div>
    );
};

export default Login;