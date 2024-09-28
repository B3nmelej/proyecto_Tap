import express, { json } from 'express'
// import { routerUsuarios } from '../routes/usuarios.js';
import { corsMiddleware } from '../middlewares/cors.js';
import { createRouter } from '../routes/Routes.js';
import {Model} from '../models/mysql.js'
const app = express();
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/sistema', createRouter({Model: Model}) )

// app.use('/usuarios', routerUsuarios)



const PORT = process.env.PORT ?? 1234
app.listen(PORT, ()=>{
  console.log(`server listening on port http://localhost:${PORT}`)
})