import 'dotenv/config'
import MongoClient from "mongodb"

class DataBaseClient{
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=EnvironmentDev`
        this.client = new MongoClient(queryString)
        this.db = null
    }

    async init(){
        try{
            await this.client.connect()
            this.db = this.client.db('adoption')
            console.log('✅ Conectado a MongoDB correctamente')
        }catch(e){
            console.error('❌ Error conectando a MongoDB:', error)
            throw error
        }
    }

    getDB(){
        if (!this.db) {
            throw new Error('❗ La base de datos no está conectada. Llama a init() primero.')
        }
        return this.db
    }
}

const dbClient = new DataBaseClient()
export default dbClient