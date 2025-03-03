import './styles/Home.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer.js';
import Navbar from '../pages/components/Navbar.js';
import './../fonts/JosefinSans-VariableFont_wght.ttf';
import TheTeam from './components/TheTeam.js';
import Hero from './components/Hero.js';
import Sponsors from './components/Sponsors.js';
import FAQ from './components/FAQ.js';
import Agenda from './components/Agenda.js';
// import Workshop from './components/Workshop.js';
// import Panelist from './components/Panelist.js';
// import KeyNote from './components/KeyNote.js';

export default function Home() {
  return (
    <div id="App">
      <div className="App-Component">
        <div className="Nav-Component">
          <Navbar />
        </div>
      </div>
      <div className="Hero-Background">
        <div className="App-Component">
          <Hero />
        </div>
      </div>
      <div className="About-Us-Background">
        <div className="App-Component">
          <AboutUs />
        </div>
      </div>
      <div className="Agenda-Background" id="Agenda">
        <div className="App-Component">
          <Agenda />
        </div>
      </div>
      {/* Add KeyNote Section */}
      {/* <div className="KeyNote-Background" id="KeyNote">
        <div className="KeyNote-Component">
          <KeyNote />
        </div>
      </div>

      <div className="Workshop-Background" id="KeyNote">
        <div className="Workshop-Component">
          <Workshop />
        </div>
      </div>

      <div className="Panelist-Background" id="Panelist">
        <div className="Panelist-Component">
          <Panelist />
        </div>
      </div> */}

      <div className="Sponsor-FAQ-Team-Background">
        <div className="App-Component" id="Sponsors">
          <Sponsors />
        </div>
        <div className="App-Component" id="FAQ">
          <FAQ />
        </div>
        <div className="App-Component" id="TheTeam">
          <TheTeam />
        </div>
      </div>
      <Footer />
    </div>
  );
}
