import express from 'express';
import MascotasController from '../controllers/mascotasController.js'

const route = express.Router()

route.post('/',MascotasController.create)
route.get('/',MascotasController.getAll)
route.get('/:id',MascotasController.getById)
route.put('/:id',MascotasController.update)
route.delete('/:id',MascotasController.delete)

export default route