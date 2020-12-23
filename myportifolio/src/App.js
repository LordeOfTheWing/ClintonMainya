import React from 'react';
//Importing the global style
import GlobalStyle from './components/GlobalStyle';

//Importing Pages
import AboutMe from '../src/pages/AboutMe';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <AboutMe/>
    </div>
  );
}

export default App;
