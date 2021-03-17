import './app.css';
import BodyContent from './components/body_container/body_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/aboutus/aboutus';
import AboutAgents from './components/aboutagents/about_agents';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Tf_t5d63pHA?autoplay=1&controls=0&mute=1&disablekb=1&playlist=Tf_t5d63pHA&loop=1" frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <BodyContent />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Header />
          <AboutUs />
          <Footer />
        </Route>
        <Route path="/aboutagents">
          <Header />
          <AboutAgents />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
