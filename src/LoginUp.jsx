   
    import React, { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faUser, faEnvelope, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
    import { checkValidation } from './Validate';
    import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
    import { auth } from './firebase';
    import { useNavigate } from 'react-router-dom';

    function LoginUp() {
        const navigate = useNavigate();
        const [signUp, setSignUp] = useState(false);
        const [error,  setError] = useState(null);
        const [showPin, setHidePin] = useState(false);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword]  = useState('');



    const handleClick = async () => {
        if((email && password) === '') {
            setError('Please Enter field');
            return
        };
        const message = checkValidation(email, password);
        setError(message);
        if(message !== null) return;

        if(signUp) {
             await createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
              const user = userCredential.user;
              const userDetails = {
                email: user.email
              }
              setName(''); setEmail(''); setPassword(''); setError(null);
              navigate('/LoggedIn', { state: userDetails });
            })
            .catch((error) => {
              setError(error.code);
            });
        } else {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              const userDetails = {
                email: user.email
              };
              setEmail(''); setPassword(''); setError(null);
              navigate('/LoggedIn', { state: userDetails });
            })
            .catch((error) => {
                setError('Invalid sign In User');
            });
        }
    
    };
    

    const createAccount = () => {
        setName(''); setEmail(''); setPassword(''); setError(null);
        setSignUp(!signUp);
    };

    const showPassword = () => {
        console.log('password');
        if(password) {
            setHidePin(!showPin);
        }
    };

    const nameCilcked = (e) => {
        setName(e.target.value);
    };

    const emailClicked = (e) => {
        setEmail(e.target.value);
    };

    const passwordClicked = (e) => {
        console.log('password clicked');
        setPassword(e.target.value);
    }


    return (

        <div className={`w-2/4 rounded-md flex justify-center items-center mx-auto my-10 ${ signUp ? ' bg-pink-600' : 'bg-gray-600' }`}>
            <div className="flex flex-col relative">
            <p className="flex justify-center p-10 text-4xl font-bold">{ signUp ? 'sign Up' : 'sign In'}</p> 
            <div className="pb-10">
            {
                signUp && (
                    <div>
            <input type={"text"} placeholder="enter user name" value={ name } required
            className="w-60 p-2 rounded-2xl focus: outline-none whitespace-nowrap pr-9 pl-3"
            onChange={ nameCilcked }/>
            <FontAwesomeIcon icon={faUser} 
            className={`absolute pr-3 ${ signUp ? 'inset-y-[132px] right-[4px]' : ''}`}/>
            </div>
                )
            }
            <div>
            <input type={"email"} placeholder="enter email"  value= { email } required
            className="my-5 w-60 p-2 rounded-2xl focus: outline-none whitespace-nowrap pr-9 pl-3"
            onChange={ emailClicked }/>
            <FontAwesomeIcon icon={faEnvelope}
            className={`absolute pr-3 right-[4px] ${ signUp ? 'inset-y-[193px]' : 'inset-y-[153px]'}`}/>
            </div>
            <div>
            <input  type={ showPin ? 'text' : 'password' }  required
            placeholder="enter password" value = { password }
            className="w-60 p-2 rounded-2xl focus: outline-none whitespace-nowrap pr-9 pl-3"
            onChange={ passwordClicked }/>
            {
               !showPin && (
            <FontAwesomeIcon icon={faLock}
            className={`absolute pr-3 right-[4px] cursor-pointer ${ signUp ? 'inset-y-[252px]' : 'inset-y-[212px]'}`}
            onClick={ showPassword } />
                )
            }
            {
               showPin && (
            <FontAwesomeIcon icon={faLockOpen} 
            className={`absolute pr-3 right-[4px] cursor-pointer ${ signUp ? 'inset-y-[252px]' : 'inset-y-[212px]'}`}
            onClick={showPassword} />
                )
            }
            </div>
            {
                (error !== null) && (
                    <p className="flex justify-center my-3 text-red-700 font-bold">{ error }</p>
                )
            }
            {
                !signUp && (
                    <>
                    <button 
                    className="w-60 p-2 rounded-2xl bg-slate-50 text-lg font-bold hover:bg-red-300 focus:outline-none mb-3 mt-8"
                    onClick={ handleClick }
                    >Log In</button>
                    <p>No account?<span 
                    className="text-md font-medium pl-2 cursor-pointer hover:text-yellow-50 underline" 
                    onClick={ createAccount }>Create account</span></p>
                    </>
                    
                ) 
            }
            {
                signUp && (
                    <>
                    <button 
                    className="w-60 p-2 rounded-2xl bg-slate-50 text-lg font-bold hover:bg-red-300 focus:outline-none mb-3 mt-8"
                    onClick={ handleClick }
                    >Sign Up</button>
                    <span className="text-md font-bold pl-2 cursor-pointer hover:text-yellow-50 underline w-15 flex justify-center" onClick={ createAccount }>Log In?</span>
                    </>
                )
            }
            </div>
            </div>
        </div>
     
     )
    }

    export default LoginUp;