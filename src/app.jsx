import './app.css';
import BodyContent from './components/body_container/body_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/aboutus/aboutus_main/aboutus';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chinamoves/aboutus">
          <Header />
          <AboutUs />
          <Footer />
        </Route>
        <Route path={["", "/", "/chinamoves/", "/chinamoves"]}>
          <Header />
          <BodyContent />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
