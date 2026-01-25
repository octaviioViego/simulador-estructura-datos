import './App.css';
import { Navbar } from './components/Nevbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { HeroProps } from './components/Hero/HeroProps.types';

export function App() {
  const [heroType, setHeroType] = useState<HeroProps["type"]>("inicio");


  return (

    <div className="app">
      <Navbar onSelect={setHeroType} />

      <main className='main'>

        <Hero type={heroType} />

      </main>

      <Footer />

    </div>

  );
}

