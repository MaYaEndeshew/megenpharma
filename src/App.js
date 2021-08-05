import React from 'react';
import{BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import './App.css'

// import Navbar from '../src/Components/navBar/Navbar'
// import Sidebar from '../src/Components/sidebar/Sidebar'
import Home from './pages/Home'
import Footer from './Components/footer/footer';



function App() {
  
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/portfolio" component={Portfolio} exact />
        <Route path ="/estimate" component={Estimate} exact/> */}
      </Switch>  
      <Footer/>
    </Router>
  );
}

export default App;
