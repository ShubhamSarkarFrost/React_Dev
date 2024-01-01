import {forwardRef, useImperativeHandle} from 'react'

const  ResultModal = forwardRef(function ResultModal({result,targetTime},ref) {

      useImperativeHandle(ref,() =>{
          return {
              open() {
                dialog.current.showModal();
              }
          };
      });
    return (
       <dialog ref={ref} className="result-modal">
           <h2>You {result}</h2>
           <p>the target Time was <strong>{targetTime}seconds.</strong></p>
           <p>You stopped the Timer with <strong>X seconds left.</strong></p>
           <form method="dialog">
               <button>Close</button>
           </form>
       </dialog>
   );
})

export default ResultModal;