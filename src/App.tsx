import React from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewVRChat from "./Components/Pages/ViewVRChat";

function App() {
  return (
    <div>
        <Route excat path={'/home'} component={ViewStart}/>
        <Route path={'/worlds'} component={ViewWord} />
        <Route path={'/vrchat'} component={ViewVRChat} />
        <Redirect to={'/home'}/>
    </div>
  );
}

export default App;
