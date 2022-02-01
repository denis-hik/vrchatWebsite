import React from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";

function App() {
  return (
    <div>
        <Route excat path={'/home'} component={ViewStart}/>
        <Route path={'/worlds'} component={ViewWord} />
        <Redirect to={'/home'}/>
    </div>
  );
}

export default App;
