import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext } from 'react';

export const ImageContext = createContext([])

function App() {
  const images = [
    './images/services/image-1.jpg',
    './images/services/image-2.jpg',
    './images/services/image-3.jpg',
    './images/services/image-4.jpg',
    './images/services/image-5.jpg',
    './images/services/image-6.jpg',
  ]

  return (
    <ImageContext.Provider value={images}>
      <div className="App">

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </ImageContext.Provider>
  );
}

export default App;
