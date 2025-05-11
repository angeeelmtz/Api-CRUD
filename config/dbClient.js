import 'dotenv/config'
import { MongoClient } from "mongodb"

class DataBaseClient{
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=EnvironmentDev`
        this.client = new MongoClient(queryString)
        this.connectDataBase()
    }

    async connectDataBase(){
        try {
            await this.client.connect()
            this.db = this.client.db('adoption')
            console.log("Conectado al servidor de MongoDB")
        } catch (e) {
            console.log(e)
        }
    }
}

export default new DataBaseClient