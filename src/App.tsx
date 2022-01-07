import React from 'react';
import ViewStart from "./Components/ViewStart/ViewStart";
import {Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div>
        <Route excat path={'/home'} component={ViewStart}/>
        <Redirect to={'/home'}/>
    </div>
  );
}

export default App;
