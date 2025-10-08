import { useState, useEffect } from 'react';
import Header from './components/Header';
import PasswordDisplay from './components/PasswordDisplay';
import Controls from './components/Controls';
import { generatePassword, getStrength } from './util/password';
import logo from '../src/assets/padlock.png'

export default function App() {
  // lifted state
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  useEffect(() => {
    const p = generatePassword({ length, includeUpper, includeLower, includeNumbers, includeSymbols });
    setPassword(p);
    setStrength(getStrength(p));
  }, []); // generate once on mount

  useEffect(() => {
    // update strength live when password changes
    setStrength(getStrength(password));
  }, [password]);

  const regenerate = () => {
    const p = generatePassword({ length, includeUpper, includeLower, includeNumbers, includeSymbols });
    setPassword(p);
    setStrength(getStrength(p));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert('Password copied to clipboard');
    } catch (e) {
      alert('Unable to copy — please copy manually');
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-panel">
        <div className="left-illustration" aria-hidden>
          {/* Illustration placeholder - you can replace with an SVG image */}
         <img src={logo} alt="Password security illustration" />
        </div>

        <div className="right-panel">
          <PasswordDisplay password={password} onCopy={copyToClipboard} onRefresh={regenerate} strength={strength} />

          <Controls
            length={length}
            setLength={setLength}
            includeUpper={includeUpper}
            setIncludeUpper={setIncludeUpper}
            includeLower={includeLower}
            setIncludeLower={setIncludeLower}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
            includeSymbols={includeSymbols}
            setIncludeSymbols={setIncludeSymbols}
            onGenerate={regenerate}
          />
        </div>
      </div>
    </div>
  );
}