import './app.css';
import BodyContent from './components/body_container/body_container';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Tf_t5d63pHA?autoplay=1&controls=0&mute=1&disablekb=1&playlist=Tf_t5d63pHA&loop=1" frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <BodyContent />
      <Footer />
    </>
  );
}

export default App;
