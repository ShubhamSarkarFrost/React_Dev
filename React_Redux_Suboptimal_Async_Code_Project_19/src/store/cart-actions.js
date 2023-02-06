import {uiActions} from "./ui-slice";


  const fetchCartData = () =>{
      return dispatch => {
          const fetchData = async () =>{
              const response = await  fetch('https://react-http-498df-default-rtdb.firebaseio.com/cart.json')
          };
      }
  }


export const sendCartData = (cart) => {
    return async (dispatch) =>{
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending..',
            message: 'Sending Cart Data!'
        }));

        const sendRequest = async () =>{
            const response = await fetch('https://react-http-498df-default-rtdb.firebaseio.com/cart.json', {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            );
            if(!response.ok){
                throw new Error('Sending Cart Data Failed!!')
            }
        }
        try{
            await  sendRequest()
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!!',
                message: 'Sent Cart Data successfully'
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!!',
                message: 'Sending Cart Data failed'
            }));
        }



    };
}