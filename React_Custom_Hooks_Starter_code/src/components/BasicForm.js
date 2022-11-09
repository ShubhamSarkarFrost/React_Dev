import useInput from "../hooks/use-input";


const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstnameInputHasError,
        valueChangeHandler: firstnameChangedHandler,
        inputBlurHandler: firstnameBlurHandler,
        reset: resetfirstNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastnameInputHasError,
        valueChangeHandler: lastnameChangedHandler,
        inputBlurHandler: lastnameBlurHandler,
        reset: resetlastNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))


    let formIsValid = false;

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }


    const formSubmissionHandler = event => {
        event.preventDefault()
        if (!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) {
            return;
        }
        console.log(`${enteredFirstName} ${enteredLastName} and ${enteredEmail}`);

        resetfirstNameInput()
        resetlastNameInput()
        resetEmailInput()
    }

    const firstnameInputClasses = firstnameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const lastnameInputClasses = lastnameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={firstnameInputClasses}>
                <label htmlFor='firstname'>Your Name</label>
                <input
                    type='text'
                    id='firstname'
                    onChange={firstnameChangedHandler}
                    onBlur={firstnameBlurHandler}
                    value={enteredFirstName}
                />
                {firstnameInputHasError && (
                    <p className='error-text'>Name must not be empty.</p>
                )}
            </div>
            <div className={lastnameInputClasses}>
                <label htmlFor='lastname'>Your Name</label>
                <input
                    type='text'
                    id='lastname'
                    onChange={lastnameChangedHandler}
                    onBlur={lastnameBlurHandler}
                    value={enteredLastName}
                />
                {lastnameInputHasError && (
                    <p className='error-text'>Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className='error-text'>Please enter a valid email.</p>
                )}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
