import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainContent from '../components/MainContent';
import MainContentImage from '../components/MainContentImage';
import Pricing from '../components/Pricing';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainContent />
          </div>
        </div>
        <MainContentImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <About />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Contact />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
