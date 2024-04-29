import "./App.css";
import MyNavbar from "./Components/navbar/MyNavbar";
import SectionVersion from "./Components/sectionVersion/SectionVersion";
import SectionOne from "./Components/section-1/SectionOne";
import SectionTwo from "./Components/section-2/SectionTwo";
import SectionCouleur from "./Components/sectionCouleur/SectionCouleur";
import SectionJante from "./Components/sectionJante/SectionJante";
import SectionInterieur from "./Components/sectionInterieur/SectionInterieur";
import SummaryCard from "./Components/summaryCard/SummaryCard";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <SummaryCard />
      <SectionTwo /> 
      <SectionOne />
      <SectionVersion />
      <SectionCouleur />
      <SectionJante />
      <SectionInterieur />
      <Footer/>
    </div>
  );
}

export default App;
