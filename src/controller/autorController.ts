import { Request,Response } from 'express'
import {PrismaClient} from'@prisma/client'
const prisma = new PrismaClient()

export const obterAutorPorId  = async (req:Request,res:Response )=>{
    const {id} = req.params
    try{
        const autor = await prisma.autor.findUnique({
            where: {id,}
        })
        res.json(autor)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
    
}
export const criarAutor  = async (req:Request,res:Response )=>{
    const {nome,dataNascimento,nacionalidade,biografia} = req.body
    try{
        const autor = await prisma.autor.create({
            nome,
            dataNascimento,
            nacionalidade,
            biografia
        })
        res.json(autor)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
}
export const listarAutor = async (req:Request,res:Response )=>{
    try{
        const autor = await prisma.autor.findAll()
        res.json(autor)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
}
export const atualizarAutor = async (req:Request,res:Response )=>{
    const {id} = req.params
    const{nome,dataNascimento,nacionalidade,biografia} = req.body
    try{
        const autor = await prisma.autor.update({
            where:{id,},
            nome,dataNascimento,nacionalidade,biografia
        })
        res.json(autor)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
}
export const deleteAutor = async (req:Request,res:Response )=>{
    const {id} = req.params
    try{
        const autor = await prisma.autor.delete({
            where:{id,},
        })
        res.json(autor)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
}
export default autorController