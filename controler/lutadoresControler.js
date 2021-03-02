const dataBaseModel = require('../model/dataBaseModel');

class LutadoresControler {
    
    //função para criar lutador
    async create(req, res){
        const lutador = new dataBaseModel(req.body);
        await lutador
                .save()
                .then(response =>{
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    //função para atualizar lutador
    async update(req, res) {
        await dataBaseModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})//new true devolve a tarefa atualizada, sem ele ira devolver a tarefa como era antes
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            });
        }

    //função para mostrar todos os lutadores
    async all(req, res){
        await dataBaseModel.find({})
            .sort('id')
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(2)
            })
    }

    //função para mostrar um lutador
    async show(req, res) {
        await dataBaseModel.findById(req.params.id)
        .then(response =>{
            if(response)
              return res.status(200).json(response);
            else
              return res.status(404).json({error: 'Tarefa não encontrada'});
        })
        .catch(error => {
            return res.status(500).json(error)
        });
    }

    //função para deletar
    async delete(req, res) {
        await dataBaseModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response)            
        })
        .catch(error =>{
            return res.status(500).json(error);
    });
    }




}

module.exports = new LutadoresControler();