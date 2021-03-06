import './App.css';
import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import HomePage from './components/home';
import FlashCard from './components/flashCard';
import ManageCard from './components/manageCard';
import Header from './components/header';

function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/flash-card" exact component={FlashCard}/> 
        <Route path="/manage-card" exact component={ManageCard} />
      </HashRouter>
    </div>
  );
}

export default App;
