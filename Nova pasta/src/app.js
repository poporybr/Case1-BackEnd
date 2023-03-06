import express from 'express';
import cors from 'cors'
import contentsController from '../controllers/contentsController.js';

const app = express()

app.use(express.json())

app.use(cors())

contentsController.rotas(app)

app.delete('/conteudo/:id', contentsController.deletar)
app.put('/conteudo/id', contentsController.atualizar)


export default app