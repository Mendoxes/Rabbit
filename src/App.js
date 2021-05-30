import logo from './logo.svg';
import './App.css';
import AllPosts from "./components/AllPosts"
import OnePost from "./components/OnePost"

import {BrowserRouter, Route} from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
    <div className="App"> 
    <Route component = {AllPosts} path ="/" exact />
    <Route component = {OnePost} path ="/:slug" exact />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
