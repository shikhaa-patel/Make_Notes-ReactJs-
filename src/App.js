import './App.css';
import Navbar from './components/Navbar';
import Addnotes from './components/Addnotes';
import Notesdetails from './components/Notesdetails';
import Home from './components/Home';
import {BrowserRouter as Router , Route ,Switch}  from 'react-router-dom';
import Notfound from './components/Notfound';


function App() {
  return (
    <Router>
    <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/Addnotes">
                <Addnotes/>
          </Route>
          <Route exact path="/note/:id">
               <Notesdetails/> 
          </Route>
          <Route exact path="*">
               <Notfound/>
          </Route>
        </Switch>
        
      
      </div>
      </Router>
  );
}

export default App;
