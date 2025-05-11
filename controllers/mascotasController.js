import MascotasModels from "../models/mascotasModels.js"

class MascotasController{
    constructor(){

    }

    async create(request, response){
        try {
            const data = await MascotasModels.create(request.body)
            response.status(201).json(data)
        } catch (e) {
            response.status(500).send(e)
        }
    }

    async getAll(request, response){
        try {
            const data = await MascotasModels.getAll(request.body)
            response.status(200).json(data)
        } catch (e) {
            response.status(500).send(e)
        }
    }

    async getById(request, response){
        try {
            const {id} = request.params
            const data = await MascotasModels.getById(id)
            response.status(200).json(data)
        } catch (e) {
            response.status(500).send(e)
        }
    }

    async update(request, response){
        try {
            const {id} = request.params
            const data = await MascotasModels.update(id,request.body)
            response.status(200).json(data)
        } catch (e) {
            response.status(500).send(e)
        }
    }
    
    async delete(request, response){
        try {
            const {id} = request.params
            const data = await MascotasModels.delete(id)
            response.status(206).json(data)
        } catch (e) {
            response.status(500).send(e)
        }
    }
}

export default new MascotasController