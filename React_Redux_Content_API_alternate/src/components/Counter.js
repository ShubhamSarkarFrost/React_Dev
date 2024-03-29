import { Component } from 'react';
import {useSelector , useDispatch, connect} from "react-redux";
import { counterActions } from '../store/counter-slice'
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch  =  useDispatch()
  const counter =  useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)


  const incrementHandler = () =>{
       dispatch(counterActions.increment());
  };
  const decrementHandler = () =>{
      dispatch(counterActions.decrement());
  };

  const increaseHandler =() => {
      dispatch(counterActions.increase(5)) // {type: SOM_UNIQUE_IDENTIFIER, payload : 10}
  }

  const toggleCounterHandler =() =>{
      dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increment By 5</button>
          <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

//////////////////////////  Class   Based Component ///////////////////////////////////////////////
// class Counter extends Component {
//
//     incrementHandler() {
//         this.props.increment()
//     }
//     decrementHandler() {
//         this.props.decrement()
//     }
//
//     toggleCounterHandler() {}
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStatetoProps  = state =>{
//     return {
//         counter: state.counter
//     }
// }
//
// const mapDispatchtoProps = dispatch =>{
//     return {
//         increment : () => dispatch({type:'increment'}),
//         decrement: () => dispatch({type:'decrement'})
//     }
// }
//
// export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);

export default Counter
