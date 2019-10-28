import React from 'react'   ;
import {render} from  'react-dom';
//import Pet from './Pet';
import SearchParams from './SearchParams';


const App = () => {

  return (
    <div>
      <h1 id="something important">Adop me!</h1>
      <SearchParams/>

      {/* <Pet name="Luna" animal="Dog" breed="Havaneese"/>
      <Pet name="Peper" animal=" Bird" breed="Cockatiel"/>
      <Pet name="Doink" animal="Cat" breed="Mixed"/> */}
    </div>
  )
};
render( <App/>, document.getElementById("root"));
