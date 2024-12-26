import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {assetsInitStateType} from "../types";
import {ext as  getAssetsExt} from "../actions/getAssets";
import {dataAssetType} from "../../../../../Backend/types";

const assetsInitState: assetsInitStateType = {
    data: {},
    state: "idle",
    errors: []
}

const assetsSlice = createSlice({
    name: "assets",
    initialState: assetsInitState,
    reducers: {
        setAssetCurrent: (state, action: PayloadAction<dataAssetType | undefined>) => {
            state.current = action.payload
        }
    },
    extraReducers: builder => {
        getAssetsExt(builder)
    }
})

export const {setAssetCurrent} = assetsSlice.actions
export default assetsSlice.reducer