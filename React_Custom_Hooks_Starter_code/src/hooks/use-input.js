import { useReducer } from 'react'


const initialInputState = {
        value: '',
        istouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return { value:action.value, istouched: state.istouched}
    }
    if(action.type === 'BLUR'){
        return  {istouched: true}
    }
    if(action.type === 'RESET'){
        return  {istouched: false , value: ''}
    }

    return initialInputState
};


const useInput = (validateValue) =>{
   const [inputState, dispatch] = useReducer(inputStateReducer,initialInputState)


    const valueIsValid = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value:event.target.value})
    };

    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR'})
    };

    const reset =() =>{
        dispatch({type:'RESET'})
    }



    return {
      value : inputState.value,
      isValid: valueIsValid,
      hasError : hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset
    };



}
export default useInput;