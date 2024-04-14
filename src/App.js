import './App.css';
import {
  Header,
  Work,
  Skills,
  Aboutme
} from './components'
import Navindecator from './components/Navindecator';

import SectionTemp from './layouts/SectionTemp';


function App() {
  return (
    <div className="App">
      {/* <SectionTemp><Header /></SectionTemp>
      <SectionTemp><Work /></SectionTemp>
      <SectionTemp><Skills /></SectionTemp>
      <SectionTemp><Aboutme /></SectionTemp>        */}

      <Header />
      <Work />
      <Skills />
      <Aboutme />
      <Navindecator />
    </div>
  );
}

export default App;
