import {useState} from 'react'

const SimpleEmailInput = (props) =>{

    const[enteredEmail,setEnteredEmail] = useState('')
    const[enteredEmailTouched,setEnteredEmailTouched] = useState(false)

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const enteredEmailisValid = enteredEmail.trim() !== '' && enteredEmail.match(validEmailRegex);
    const emailIsInvalid = !enteredEmailisValid && enteredEmailTouched




    let formIsValid = false
    if(enteredEmailisValid){
        formIsValid = true
    }


    const nameInputChangeHandler = event =>{
        setEnteredEmail(event.target.value)
    }

    const nameInputBlurHandler = () =>{
        setEnteredEmailTouched(true)
    }

   const formSubmissionHandler = event =>{
        event.preventDefault();
        setEnteredEmailTouched(true)
        if(enteredEmailisValid === false){
            return;
        }

        console.log(enteredEmail)
         setEnteredEmail('')
        setEnteredEmailTouched(false)
   }





    const emailInputClass =emailIsInvalid ? 'form-control  invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClass}>
                <label htmlFor='email'>Your Email-Id</label>
                <input type='text' id='email' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredEmail}/>
                {emailIsInvalid && <p className="error-text">Please Enter a Valid Email like someone@someone.com</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );



}

export default SimpleEmailInput