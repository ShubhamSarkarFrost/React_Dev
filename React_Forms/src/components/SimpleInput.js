import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const passwordInputRf = useRef()
  const [enteredEmail,setEnteredEmail] = useState('')
  const [enteredNameisValid, setEnteredNameisValid] = useState(true)

  const nameInputChangeHandler = event =>{
     setEnteredEmail(event.target.value)
  }

  const formSubmissionHandler = event =>{
      event.preventDefault();

      if(enteredEmail.trim() === ''){
          setEnteredNameisValid(false)
          return;
      }
      setEnteredNameisValid(true)
      console.log(enteredEmail);
      const enteredPassword = passwordInputRf.current.value;
      console.log(enteredPassword)
      setEnteredEmail('');
  }

  const emailInputClass = enteredNameisValid ? 'form-control' :'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email-Id</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredEmail}/>
          {!enteredNameisValid && <p className="error-text">Email Must Not be Empty!!</p>}
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRf} type='text' id='password' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
