
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import Buttons from './components/Buttons';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  c = 'john';

     state={
      progress:0,
     }

      setProgress =(progress)=>{
      this.setState({progress:progress})
     }

     API_KEY = process.env.REACT_APP_API;


  render() {
    return (
      <div>
        <Router>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
        
          />
          <Routes>
            <Route exact path="/" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY}  key={"general"} country='in' category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"business"} country='in' category='business' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"entertainment"} country='in' category='entertainment' />}></Route>
            <Route exact path="/general" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"general"} country='in' category='general' />}></Route>
            <Route exact path="/health" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"health"} country='in' category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"science"} country='in' category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key={"sports"} country='in' category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress ={this.setProgress} API_KEY = {this.API_KEY} key="technology" country='in' category='technology' />}></Route>

          </Routes>

        </Router>


      </div>
    )
  }
}
