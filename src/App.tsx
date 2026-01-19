import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Animacion } from './components/Animacion';

export function App() {


return (
    
     <div className="app">
       <Navbar />
      
       <main className='main'>
        
        <Hero /> 
          <Animacion/>       
       </main>
       
       <Footer />
     
     </div>
     
  );
}

