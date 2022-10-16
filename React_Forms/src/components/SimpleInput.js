import {useRef, useState, useEffect} from 'react';

const SimpleInput = (props) => {
    const passwordInputRf = useRef()
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)


    const enteredNameisValid = enteredEmail.trim() !== ''
    const nameInputIsInvalid = !enteredNameisValid && enteredNameTouched

    let formIsValid = false
        if(enteredNameisValid){
            formIsValid = true
        }


    const nameInputChangeHandler = event => {
        setEnteredEmail(event.target.value)
    }
    const nameInputBlurHandler = event =>{
        setEnteredNameTouched(true)

    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true)
        if (enteredNameisValid === false){
            return;
        }

        console.log(enteredEmail);
        const enteredPassword = passwordInputRf.current.value;
        console.log(enteredPassword)
        setEnteredEmail('');
        setEnteredNameTouched(false)
    }


    const emailInputClass = nameInputIsInvalid ? 'form-control  invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClass}>
                <label htmlFor='email'>Your Email-Id</label>
                <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredEmail}/>
                {nameInputIsInvalid && <p className="error-text">Email Must Not be Empty!!</p>}
                <label htmlFor='password'>Your Password</label>
                <input ref={passwordInputRf} type='text' id='password'/>
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
