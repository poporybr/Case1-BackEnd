class contentsController{
    static rotas(app){
        app.get('/conteudo', contentsController.listar)
        app.post('/conteudo', contentsController.inserir)
    }

    static async listar(req, res){
        const conteudos = await ContentsDAO.listar()

        res.send(conteudos)
    }

    static async inserir(req, res){
        const conteudo = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            porcentagem: req.body.porcentagem
        }

        const result = await ContentsDAO.inserir(conteudo)

        if (result.erro) {
            res.status(500).send(result)
        }

        res.send(result)
    }

    static async deletar(req, res){
        const conteudo = await ContentsDAO.deletar(req.params.id)

        if (conteudo.erro){
            res.status(500).send('Erro ao deletar o conteudo')
        }

        res.send({mensagem: 'Conteudo removido com sucesso'}) 
    }
    
    static async atualizar(req, res){
        const conteudo = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            porcentagem: req.body.porcentagem
        }

        const result = await ContentsDAO.atualizar(req.params.id, conteudo)

        if (result.erro){
            res.status(500).send('Erro ao atualizar o conteudo')
        }

        res.send({mensagem: 'Conteudo alterado com sucesso'})
    }
}

export default contentsController;