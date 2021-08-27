import React from 'react';
//global style
  import GlobalStyle from './components/GlobalStyle';

  //import pages
  import ContactUs from './pages/ContactUs'
  import OurWork from './pages/OurWork';

  //router
  import {Switch, Route, useLocation} from 'react-router-dom'

  import Nav from './components/Nav'
//import pages
import AboutUs from './pages/AboutUs'
import ProjectDetail from './pages/ProjectDetail';

//animation
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work/:id">
            <ProjectDetail />
            </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
