import React, {useCallback, useState} from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const[showParagraph, setShowParagraph] = useState(false);
    const[allowToggle, setaAllowToggle] = useState(false);

    console.log("App is Running !!")


    const toggleParagraphHandler = useCallback(() =>{
        if(allowToggle){
            setShowParagraph(prevShowParagraph => !prevShowParagraph);
        }
        }, [allowToggle])

    const allowToggleHHandler = () =>{
        setaAllowToggle(true);
    }


  return (
    <div className="app">
      <h1>Hi there!</h1>
        {/*{showParagraph && <p>This is New!!</p>} */}
        {/*<DemoOutput show={showParagraph}/>*/}
        <DemoOutput show={showParagraph}/>
        <Button onClick={allowToggleHHandler}>Allow Toggling!!</Button>
        <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
