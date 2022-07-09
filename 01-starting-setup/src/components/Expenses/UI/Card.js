import './Card.css'

const Card = (props) =>{
    const classes ='card ' + props.className; // make sure you add a whitespace to the card container
    return <div className={classes}>{props.children}</div>
}
export default Card