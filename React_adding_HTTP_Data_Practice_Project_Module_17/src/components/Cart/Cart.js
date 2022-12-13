import React , { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setisCheckout] = useState(false)
  const [isSubmittng, setisSubmitting] = useState(false)
    const [didSubmit, setdidSubmit] = useState(false)
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
      </ul>
  );

  const orderHandler = () =>{
      setisCheckout(true)

  }

  const submitOrderHandler = async (userData) =>{
      setisSubmitting(true)
     await fetch('https://react-http-498df-default-rtdb.firebaseio.com/orders.json',{
         method: 'POST',
         body: JSON.stringify({
             user: userData,
             orderItems: cartCtx.items
         })
      })
      setisSubmitting(false)
      setdidSubmit(true)
      cartCtx.clearCart()
  }

  const modalActions  = <div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
              Close
          </button>
          {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
  </div>

    const cartModelContent = <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout &&<Checkout  onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        {!isCheckout && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <p>Sending Order Data!!</p>

    const didSubmitModelContent = (<React.Fragment><p>Successfully sent the Order !!!</p>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
        </div>
        </React.Fragment>)

  return (
      <Modal onClose={props.onClose}>
          {!isSubmittng && !didSubmit && cartModelContent}
          {isSubmittng && isSubmittingModalContent}
          {didSubmit && didSubmitModelContent}
      </Modal>
  );
};

export default Cart;

