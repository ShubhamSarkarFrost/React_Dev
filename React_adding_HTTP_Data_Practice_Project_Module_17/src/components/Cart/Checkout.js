import classes from './checkout.module.css'


const Checkout = props => {
    const confirmHandler =(event) =>{
        event.preventDefault()

    }
    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Your Address</label>
                <input type="text" id="address"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="postalcode">Postal Code</label>
                <input type="text" id="postalcode"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city"/>
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    )

}

export default Checkout