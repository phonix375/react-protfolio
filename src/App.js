import React from 'react';
//global style
  import GlobalStyle from './components/GlobalStyle';

  import Nav from './components/Nav'
//import pages
import AboutUs from './pages/AboutUs'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
