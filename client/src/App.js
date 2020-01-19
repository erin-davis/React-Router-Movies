import React, { useState } from 'react';
import {Route} from "react-router-dom";
import Movie from "./Movies/Movie.js";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path={`/movies/:id`}>
      {/*might want to try switching the :${id} with just :id*/}
        <Movie />
      </Route>
    </div>
  );
};

export default App;
