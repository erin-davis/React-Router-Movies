import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie}/>
      <div>Replace this Div with your Routes</div>
      
    </div>
  );
};

export default App;
