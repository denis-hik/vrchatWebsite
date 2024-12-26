import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TAvatarState} from "../types";

import {ext as  getAvatarExt} from "../actions/getAvatar";
import {ext as  getCostExt} from "../actions/getCost";
import {ext as  postAvatarExt} from "../actions/postAvatar";

const initD = {
    state: "idle",
    avatar: undefined,
    error: []
}

const avatarsInitState: TAvatarState = {
    current: initD as TAvatarState["current"],
    post: initD as TAvatarState["post"],
    cost: {
        state: "idle",
        error: []
    }
}

const avatarsSlice = createSlice({
    name: "avatars",
    initialState: avatarsInitState,
    reducers: {
        clearData: (state, action: PayloadAction<undefined>) => {
            state.current.avatar = undefined;
        },
        clearPost: (state, action: PayloadAction<undefined>) => {
            state.post = initD as TAvatarState["post"]
        }
    },
    extraReducers: builder => {
        getAvatarExt(builder)
        postAvatarExt(builder)
        getCostExt(builder)
    }
})

export const {clearData,clearPost} = avatarsSlice.actions
export default avatarsSlice.reducer