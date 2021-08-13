import React, {useState, useLayoutEffect} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [size, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
      
    window.addEventListener('resize', updateSize); 
    
    // cleanup
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header windowSize={size} />
        <Body windowSize={size} />
        <Footer windowSize={size} />
      </header>
    </div>
  );
}

export default App;
