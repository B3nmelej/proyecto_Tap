import {Router} from 'express'
// import {validateUsuario} from '../schema/schemas.js'
import {Controller} from '../controllers/Controller.js'



export const createRouter = ({Model}) =>{

  const router = Router()
  const controller = new Controller({Model})

  // router.post('/usuarios', (req, res)=>{

  // })
 
 router.get('/trabajadores', controller.get_trabajadores)

 return router

}

