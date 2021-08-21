import React from 'react';
//global style
  import GlobalStyle from './components/GlobalStyle';

  //import pages
  import ContactUs from './pages/ContactUs'
  import OurWork from './pages/OurWork';

  //router
  import {Switch, Route} from 'react-router-dom'

  import Nav from './components/Nav'
//import pages
import AboutUs from './pages/AboutUs'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
