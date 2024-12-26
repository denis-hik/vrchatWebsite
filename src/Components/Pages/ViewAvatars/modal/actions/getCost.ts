import {REQUEST_SERVER} from "../../../../../Backend/types";
import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../../../../../context/store";
import {TAvatar, TAvatarState, TCost} from "../types";
import axios from "axios";

type TPayload = undefined
export type Response = TCost

export const getCost = createAsyncThunk<Response,TPayload,{state:RootState}>(
    "getCost",
    async (
        payload,
        {dispatch, fulfillWithValue, rejectWithValue}
    ):Promise<Response> => {
        try {
            const response = await axios.get<{result: Response }>(`${REQUEST_SERVER}vrchat/avatars/cost`)
            return fulfillWithValue(response.data.result)
        } catch (e: any) {
            return rejectWithValue(e) as any
        }
    }
);

export const ext = (builder: ActionReducerMapBuilder<TAvatarState>) => {
    return builder
        .addCase(getCost.pending, (state, action) => {
            state.cost.state = "pending"
        })
        .addCase(getCost.fulfilled, (state, action) => {
            state.cost.data = action.payload
            state.cost.state = "succeeded"
        })
        .addCase(getCost.rejected, (state, action) => {
            state.cost.state = "failed"
        })
}