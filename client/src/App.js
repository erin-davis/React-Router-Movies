import React, { useState } from 'react';
import {Route, Switch} from "react-router-dom";
import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js";

import SavedList from './Movies/SavedList';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path={`/movies/:${props.id}`}>
          <Movie />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
