import {Router} from 'express'
import {validateUsuario} from '../schema/schemas.js'
import {Controller} from '../controllers/Controller.js'



export const createRouter = ({Model}) =>{

  const router = Router()
  const controller = new Controller({Model})

  // router.post('/usuarios', (req, res)=>{

  // })
 
 router.get('/trabajadores', controller.get_trabajadores)
 router.get('/merma', controller.get_Merma)
 router.get('/entradas', controller.get_Entradas)
 router.get('/asignaciones', controller.get_asignacionesPorTrabajador)
 router.post('/create-merma', controller.create_Merma)
 router.post('/create-entrada', controller.create_Entrada)

 return router

}

