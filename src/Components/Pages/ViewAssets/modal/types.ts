import {TRequestState} from "../../../../context/store";
import {SerializedError} from "@reduxjs/toolkit";
import {dataAssetType} from "../../../../Backend/types";

export type assetsInitStateType = {
    data: Record<dataAssetType["id"], dataAssetType>
    state: TRequestState
    errors: SerializedError[]
    current?: dataAssetType
}