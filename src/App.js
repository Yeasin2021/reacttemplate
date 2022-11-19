import './App.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div>
      <Header />
      <div className='main'>
      <AboutMe />
      </div>
    </div>
  );
}

export default App;
