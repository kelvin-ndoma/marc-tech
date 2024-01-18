// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blogs from './components/Blogs';


function App() {
  return (
    <>
      <Router>
        <Header className="w-full min-h-screen bg-gray-950" />
        <Home />
        <Portfolio />
        <Blogs/>
        <Services />
        <Contact />

        
      </Router>
    </>
  );
}

export default App;
