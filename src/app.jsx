import './app.css';
import BodyContent from './components/body_container/body_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/aboutus/aboutus_main/aboutus';
import Modal from 'react-modal';
import ContactPage from './pages/ContactPage';
import ListingsPage from './pages/ListingsPage';
import RoommatePage from './pages/RoommatePage';
import SubletPage from './pages/SubletPage';

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
        <Route path="/chinamoves/contactus">
          <ContactPage />
        </Route>
        <Route path="/chinamoves/listings">
          <ListingsPage />
        </Route>
        <Route path="/chinamoves/roommate">
          <RoommatePage />
        </Route>
        <Route path="/chinamoves/sublet">
          <SubletPage />
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
