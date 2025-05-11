import express from 'express';
import 'dotenv/config'
import routesMascotas from './routes/mascotasRoutes.js'
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/mascotas',routesMascotas)

async function startServer(){
    try{
        await dbClient.init()
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log("🚀 Servidor activo en el puerto:", PORT)
        })
    }catch(e){
        console.error("❌ No se pudo conectar a la base de datos:", e)
        process.exit(1)
    }
}

startServer()