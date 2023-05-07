import React from 'react';
const Login = (props) => {
    const{ setEmail,
        password,
        setPassword,
        handleLogin,
        handlesignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
    return {
    <section className="login">
    <div className=".loginContainer"></div>
        <label>UserName</label>
        <input type ="text"
        autofocus 
        required 
        value={email} e
        onChange={e => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input 
        type="password" 
        required 
        value={password} 
        onChange={(e) =>setPassword(e.target.value)} 
        />
        <p className="errorMsg">{passwordError</p>
<div className="btnContainer">
{
    hasaccount ?(
        <>
        <button>Sign in</button>
        <p>Dont have an account ? </span></p>
        </>
        ) : (
            <>
        <button>Sign up</button>
        <p>Have an account ? </span></p>
        </>
        )}
        </div>
        </div>
        </section>
        );
        };
export default Login;