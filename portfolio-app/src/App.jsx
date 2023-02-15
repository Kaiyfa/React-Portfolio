import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MyNav from './components/Nav/nav'
import Home from './pages/home'
import About from "./pages/About/about";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/CV";
import Footer from "./components/footer/footer";
import "./App.css";



class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="bg" style={{ paddingBottom: "60px", backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)` }}>
          <MyNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;