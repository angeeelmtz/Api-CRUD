import { ObjectId } from "mongodb";
import DataBaseClient from "../config/dbClient.js";

class MascotasModels{

    async create(mascota){
        const collectionPets = DataBaseClient.db.collection('pets')
        return await collectionPets.insertOne(mascota)
    }

    async getAll(){
        const collectionPets = DataBaseClient.db.collection('pets')
        return await collectionPets.find({}).toArray()
    }

    async getById(id){
        const collectionPets = DataBaseClient.db.collection('pets')
        return await collectionPets.findOne({_id:new ObjectId(id)})
    }

    async update(id,mascota){
        const collectionPets = DataBaseClient.db.collection('pets')
        return await collectionPets.updateOne({_id:new ObjectId(id)},{$set:mascota})
    }

    async delete(id){
        const collectionPets = DataBaseClient.db.collection('pets')
        return await collectionPets.deleteOne({_id:new ObjectId(id)})
    }

}

export default new MascotasModels