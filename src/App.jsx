import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Publication, StarsCanvas, Footer } from './components';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary transition-colors duration-300 overflow-x-hidden">
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <Publication />
          <Experience />
          <Tech />
          
          <div className='relative z-0'>
            <Contact />
            <Footer />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
