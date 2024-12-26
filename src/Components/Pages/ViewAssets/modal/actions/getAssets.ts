import {dataAssetType, REQUEST_SERVER} from "../../../../../Backend/types";
import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../../../../../context/store";
import axios from "axios";
import {assetsInitStateType} from "../types";

type TPayload = undefined
export type Response = dataAssetType[]

export const getAssets = createAsyncThunk<Response,TPayload,{state:RootState}>(
    "getAssets",
    async (
        payload,
        {dispatch, fulfillWithValue, rejectWithValue}
    ):Promise<Response> => {
        try {
            const response = await axios.get<{result: any[] }>(`${REQUEST_SERVER}vrchat/assets`)
            return fulfillWithValue(response.data.result.map(asset => ({
                name: asset[1],
                image: asset[3],
                id: asset[0],
                download: asset[4],
                des: asset[2],
                tags: [asset[5]],
                images: [asset[7]]
            })))
        } catch (e: any) {
            return rejectWithValue(e) as any
        }
    }
);

export const ext = (builder: ActionReducerMapBuilder<assetsInitStateType>) => {
    return builder
        .addCase(getAssets.pending, (state, action) => {
            state.state = "pending"
        })
        .addCase(getAssets.fulfilled, (state, action) => {
            state.state = "succeeded"
            state.data = Object.fromEntries(action.payload.map((item) => [item.id, item]))
        })
        .addCase(getAssets.rejected, (state, action) => {
            state.state = "failed"
            state.errors = [action.error]
        })
}