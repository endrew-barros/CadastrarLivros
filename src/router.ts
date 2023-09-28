import {Router} from 'express'
import * as autorController from './controller/autorController'
import * as livroController from './controller/livroController'
const router = Router();
router.post('/autores', autorController.criarAutor)
router.get('/autores', autorController.listarAutor)
router.get('/autores/:id', autorController.obterAutorPorId)
router.put('/autores/:id', autorController.atualizarAutor)
router.delete('/autores/:id', autorController.deleteAutor)

router.post('/livros', livroController.criarLivro)
router.get('/livros', livroController.listarLivro)
router.get('/livros/:id', livroController.obterLivroPorId)
router.get('/autores/:autorId/livros', livroController.obterLivroPorId)
router.put('/livros/:id', livroController.atualizarLivro)
router.delete('/livros/:id', livroController.deleteLivro)

export default router