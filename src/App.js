import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Works from './components/works';
import Workst from './components/workst';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


// Currently trying to add multiple pages to my portfolio. Having a hard time 
// maintaining the scrolling tabs and a button for multiple pages.
//
// export default function Wrap() {
//   return <BrowserRouter>
//     <Switch>
//       <Route exact path="/works" component={Link} to="/works" />
//       <Route exact path="/about" component={Link} to="/about" />
//     </Switch>
//   </BrowserRouter>
// }


class App extends Component {

  render() {
    return (<BrowserRouter>
      <div className="App">
       <Header />
       <About />
       <Resume />
       <Works />
       <Workst />
       <Footer />
      </div>
    </BrowserRouter>);
  }
}

export default App;