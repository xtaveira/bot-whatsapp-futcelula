import { ItemDocument } from "../item/item.schema";
import ListModel, { ListDocument } from "./list.schema";


export async function createList(itens: ItemDocument[]): Promise<ListDocument> {
    try {
        const newList = new ListModel({
            itens: itens.map(item => item._id)
        })
        const savedList = await newList.save();
        return savedList

    } catch (error) {
        throw new Error('Error creating new list. Error: '+error)
    }
}

export async function addItensOnList(listId: string, newItens: ItemDocument[]): Promise<ListDocument | undefined> {
    try {
        const list = await ListModel.findById(listId)
        if(!list) {
            throw new Error('List not found')
        }
        list.itens.push(...newItens.map(item => item._id))

        const updatedList = await list.save()
        return updatedList

    } catch (error) {
        
    }
}

