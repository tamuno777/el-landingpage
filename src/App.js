import logo from './logo.svg';
import './App.css';
import Navzz from './Nav/Navbar';
import Firstpage from './component/firstPage/Firstpage';
import About from './component/Aboutus/About';
import Properties from './component/Properties/properties';
import Contact from './component/Contactus/Contact';

function App() {
  return (
    <div className="App">
      <Navzz/>
      <Firstpage/>
      <About/>
      <Properties/>
      <Contact/>
    </div>
  );
}

export default App;
