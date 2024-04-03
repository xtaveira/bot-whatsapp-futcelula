import { Schema, model } from "mongoose";
import {ItemDocument} from "../item/item.schema";

export interface List {
    itens: ItemDocument[];
}

export type ListDocument = Document & List;

const listSchema = new Schema<ListDocument>({
    itens: [{type: Schema.Types.ObjectId, ref: "Item"}]
},{
    timestamps: true
})

export default model<ListDocument>('List', listSchema)