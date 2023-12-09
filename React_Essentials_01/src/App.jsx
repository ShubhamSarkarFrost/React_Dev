import { useState } from 'react'
import CoreConcept from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";

import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from "./data.js";
import {EXAMPLES} from "./data.js";
import TabButton from "./components/TabButton";


function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleClick(selectedButton) {
       setSelectedTopic(selectedButton)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}
                                     image={CORE_CONCEPTS[1].image}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}
                                     image={CORE_CONCEPTS[3].image}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleClick('components')} >{CORE_CONCEPTS[0].title}</TabButton>
                        <TabButton onClick={() => handleClick('jsx')}>{CORE_CONCEPTS[1].title}</TabButton>
                        <TabButton onClick={() => handleClick('props')}>{CORE_CONCEPTS[2].title}</TabButton>
                        <TabButton onClick={() => handleClick('state')}>{CORE_CONCEPTS[3].title}</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
