import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts.jsx";
import { EXAMPLES } from './data.js';
import Example from "./components/Example";


function App() {
  return (
    <>
      <Header />
      <main>
       <CoreConcepts/>
       <Example/>
      </main>
    </>
  );
}

export default App;
