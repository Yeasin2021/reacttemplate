import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Service from './components/Service';
import Testimonial from './components/Testimonial';



function App() {
  return (
    <div>
      <Header />
      <div className='main'>
      <AboutMe />
      <Resume />
      <Service />
      {/* <Testimonial /> */}
      </div>
    </div>
  );
}

export default App;
