import {Request, Response} from 'express'
import {createList, addItensOnList} from './list.service'
import { ItemDocument } from '../item/item.schema'

export async function createNewList(req: Request, res: Response): Promise<void> {
    try {
        const { itens } = req.body
        if(!itens || !Array.isArray(itens)) {
            res.status(400).json({error: 'Itens inválidos'})
            return
        }

        const list = await createList(itens as ItemDocument[])
        res.status(201).json(list)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export async function addItens(req: Request, res: Response): Promise<void> {
    try {
        const { listId } = req.params
        const { newItens } = req.body
        if(!newItens || !Array.isArray(newItens)) {
            res.status(400).json({error: 'Invalid Itens'})
            return
        }

        const list = await addItensOnList(listId, newItens as ItemDocument[])
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({error: error})
    }
}
