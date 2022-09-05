import React, {useState} from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const[showParagraph, setShowParagraph] = useState(false);

    console.log("App is Running !!")

    const toggleParagraphHandler = () =>{
        setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

  return (
    <div className="app">
      <h1>Hi there!</h1>
        {/*{showParagraph && <p>This is New!!</p>} */}
        {/*<DemoOutput show={showParagraph}/>*/}
        <DemoOutput show={false}/>
        <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
