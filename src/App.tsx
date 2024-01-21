import React, {useCallback, useEffect, useState} from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect, Switch} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewAssets from "./Components/Pages/ViewAssets";
import ViewQuest from "./Components/Pages/ViewQuest";
import {ViewVrchatApi} from "./Components/Pages/ViewVrchatApi";
import {getAssetsAction} from "./Components/Pages/ViewAssets/modal/getAssetsAction";
import ViewStack from "./Components/Pages/ViewStack";
import {getAssetsGumroadAction} from "./Components/Pages/ViewAssets/modal/getAssetsGumroadAction";
import {dataAssetType} from "./Backend/types";
import ViewAvatars from "./Components/Pages/ViewAvatars";
import {AppBody} from "./styled";
import ViewFurCity from "./Components/Pages/ViewFurCity";

function App() {
    const [dataAssets, setDataAssets] = useState<dataAssetType[]>([]);
    const [statusAssets, setStatusAssets] = useState("loading");

    function handleContextMenu(e) {
        e.preventDefault(); // prevents the default right-click menu from appearing
    }

    useEffect(() => {
        getAssetsAction({
            successCallback: data1 => {
                setDataAssets(data1);
                getAssetsGumroadAction({
                   successCallback: (data1) => {
                       setDataAssets(prevState => [...prevState, ...data1]);
                       setStatusAssets("success");
                   }  ,
                    errorCallback: () => {

                        setStatusAssets("success");
                    }
                });
            },
            errorCallback: () => {
                setDataAssets([]);
                setStatusAssets("error");
            },
        })
    }, []);

    useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    });

    return (
        <AppBody>
            <Switch>
                <Route path={'/worlds'} component={ViewWord}/>
                <Route path={'/assets'} ><ViewAssets status={statusAssets} data={dataAssets} /></Route>
                <Route path={'/quest'} component={ViewQuest}/>
                <Route path={'/vrcat'} component={ViewVrchatApi}/>
                <Route path={'/avatars'} ><ViewAvatars assets={dataAssets} /></Route>
                <Route path={'/stack'} component={ViewStack}/>
                <Route path={'/furCity'} component={ViewFurCity}/>
                <Route path='/' exact={true} component={ViewStart} />
                <Redirect to={'/'}/>
            </Switch>

        </AppBody>
    );
}

export default App;
