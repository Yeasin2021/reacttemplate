import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Test from './components/Test';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
      <AboutMe />
      <Resume />
      <Service />
      <Testimonial />
      {/* <Test /> */}
      <Pricing />
      <Contacts />
     
      </div>
      
    </div>
  );
}

export default App;
