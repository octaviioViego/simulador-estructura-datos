import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import {  Caja } from './components/Caja';
import { SortingFacade } from "./facades/sortingFacade";
import { useMemo } from 'react';

export function App() {

const fachada = new SortingFacade();
const lista = [1,6,5,4,9,8];

const cajaProps = useMemo(
    () => fachada.ordenarBurbujaMejorado(lista),
    [lista]
  );

return (
    
     <div className="app">
       <Navbar />
      
       <main className='main'>
        
        <Hero /> 
        <Caja inicial={cajaProps.inicial} pasos={cajaProps.pasos} 
        nombreAlgoritmo={cajaProps.nombreAlgoritmo} nombreIcono={cajaProps.nombreIcono}/> 
       
       </main>
       
       <Footer />
     
     </div>
     
  );
}

