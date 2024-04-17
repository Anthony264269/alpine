import './App.css';
import MyNavbar from './Components/navbar/MyNavbar';
import SectionOne from './Components/section-1/SectionOne';
import SectionTwo from './Components/section-2/SectionTwo'
import SectionThree from './Components/section-3/SectionThree';
import SectionFour from './Components/section-4/SectionFour';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </div>
  );
}

export default App;
