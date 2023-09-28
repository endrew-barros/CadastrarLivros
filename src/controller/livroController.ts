import { Request,Response } from 'express'
import {PrismaClient} from'@prisma/client'
const prisma = new PrismaClient()

export const obterLivroPorId = async (req: Request,res: Response)=>{
    const {id} = req.params

    try{
        const livro = await prisma.livro.findUnique({
            where:{
                id,
            }
        })

        res.json(livro)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
    
}
export const listarLivro = async (req: Request,res: Response)=>{
    try{
        const livro = await prisma.livro.findAll()

        res.json(livro)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
    
}
export const criarLivro = async (req: Request,res: Response)=>{
    const {titulo,dataPublicacao,isbn,preco} = req.body

    try{
        const livro = await prisma.livro.create({
            titulo,
            dataPublicacao,
            isbn,
            preco
        })

        res.json(livro)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
    
}

export const atualizarLivro = async (req: Request,res: Response)=>{
    const {id} = req.params
    const {titulo,dataPublicacao,isbn,preco} = req.body

    try{
        const livro = await prisma.livro.update({
            where:{id},
            titulo,
            dataPublicacao,
            isbn,
            preco
        })

        res.json(livro)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
    
}
export const deleteLivro  = async (req: Request,res: Response)=>{
    const{id} = req.params
    try{
        const livro = await prisma.livro.delete({
            where: {id,}
        })
        res.json(livro)
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem: 'erro'})
    }
}
export default livroController