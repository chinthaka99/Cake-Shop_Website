import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js'
import Hero from './Components/hero.js';
import './Components/header.css'
import Section1 from './Components/section1.js';
import Section2 from './Components/section2';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
     

    </div>
  );
}

export default App;
