import mongoose, { Schema, Document } from "mongoose";

export interface Item {
    name: string;
    confirm: boolean;
}

export type ItemDocument = Document & Item;

const itemSchema = new Schema<ItemDocument>({
    name: String,
    confirm: Boolean
}, {
    timestamps: true
})

export default mongoose.model<ItemDocument>('Item', itemSchema)