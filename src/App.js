import Navbar from './components/navbar/navbar.js';
import Description from './components/description/description.js';
import About from './components/about/about.js';
import Skills from './components/skills/skills.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Description />
            <About />
            <Skills />
        </div> 
    );
}

export default App;
