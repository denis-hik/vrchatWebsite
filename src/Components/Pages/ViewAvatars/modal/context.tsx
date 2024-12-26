import React, {useEffect} from "react";
import {RootState, useAppDispatch} from "../../../../context/store";
import {getAssets} from "../../ViewAssets/modal/actions/getAssets";
import {getCost} from "./actions/getCost";

const stateSelector = (root: RootState) => root.assets.state

export const avatarsPageContext = React.createContext<{}>({});
export const AvatarsPageContextProvider: React.FC<{ children: any }> = ({children}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAssets())
        dispatch(getCost())
    }, []);

    return (
        <avatarsPageContext.Provider value={{}}>
            {children}
        </avatarsPageContext.Provider>
    );
}
