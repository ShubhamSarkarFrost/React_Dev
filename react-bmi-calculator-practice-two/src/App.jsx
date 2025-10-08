import { useState } from 'react';
import Header from './components/Header.jsx';
import InputPanel from './components/InputPanel';
import ResultPanel from './components/ResultPanel.jsx';


function App() {
  //mode:'standard' or 'metric'
  const [mode, setMode] = useState('standard');
  
  //lifted state of inputs
  const [imperial, setImperial] = useState({feet: 5, inches: 4, pound:150});
  const [metric, setMetric] = useState({cm:170, kg:68});

  const handleImperialChange = (field, value) =>{
    setImperial((prev) => ({...prev, [field]:Number(value)}))
  }
  
  const handleMetricChange = (field, value) => {
    setMetric((prev) => ({ ...prev, [field]: Number(value) }));
  };

  const reset = () => {
    setImperial({ feet: 5, inches: 4, pounds: 150 });
    setMetric({ cm: 170, kg: 68 });
  };

  return (
   <div className="app-root">
      <div className="container">
        <div className="card card-left">
          <Header />
          <div className="content">
            <InputPanel
              mode={mode}
              setMode={setMode}
              imperial={imperial}
              metric={metric}
              onImperialChange={handleImperialChange}
              onMetricChange={handleMetricChange}
              onReset={reset}
            />
          </div>
        </div>

        <div className="card card-right">
          <ResultPanel
            mode={mode}
            imperial={imperial}
            metric={metric}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
