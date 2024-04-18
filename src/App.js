import "./App.css";
import MyNavbar from "./Components/navbar/MyNavbar";
import SectionVersion from "./Components/sectionVersion/SectionVersion";
import SectionOne from "./Components/section-1/SectionOne";
import SectionTwo from "./Components/section-2/SectionTwo";
import SectionCouleur from "./Components/sectionCouleur/SectionCouleur";
import SectionJante from "./Components/sectionJante/SectionJante";
import SectionInterieur from './Components/sectionInterieur/SectionInterieur';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <SectionOne />
      <SectionTwo />
      <SectionVersion />
      <SectionCouleur />
      <SectionJante />
      <SectionInterieur />
    </div>
  );
}

export default App;
