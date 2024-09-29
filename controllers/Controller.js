import { validarEntrada, validarMerma } from "../schema/schemas"

export class Controller {
  constructor ({ Model }) {
    this.model = Model
  }

  // trae todos los datos de los trabajadores

  get_trabajadores = async (req, res) => {
    try {
      const trabajadores = await this.model.Get_Trabajadores()
      res.json(trabajadores)

    } catch(erorr){
      console.error('Error en get_trabajadores:', error.message);
      res.status(500).json({ error: 'Error al obtener trabajadores' })
    }
   
  }
  // consigue las mermas seleccionando una fecha

  get_Merma = async (req, res) => {
    const { fecha } = req.query
    const merma = await this.model.Get_Merma({ fecha })
    if (merma) return res.json(merma)
    res.status(404).json({ message: 'not found' })
  }
  // consigue todas las Entradas 
  get_Entradas = async (req, res) => {
    try {
      const entradas = await this.model.get_Entradas()
      res.json(entradas)

    } catch(erorr){
      console.error('Error en get_Entradas:', error.message);
      res.status(500).json({ error: 'Error entradas' })
    }
  }

   //consigue las asignaciones por trabajador introduciendo un id
    get_asignacionesPorTrabajador = async (req, res) => {
      const { id } = req.query
      const Asignaciones_trabajador = await this.model.get_asignacionesPorTrabajador({ fecha })
      if (Asignaciones_trabajador) return res.json(Asignaciones_trabajador)
      res.status(404).json({ message: 'not found' })
    }
    create_Merma = async (req, res) => {
      const result = validarMerma(req.body)
  
      if (!result.success) {
      // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
  
      const nueva_merma = await this.model.create_Merma({ input: result.data })
  
      res.status(201).json(nueva_merma)
    }
    create_Entrada = async (req, res) => {
      const result = validarEntrada(req.body)
  
      if (!result.success) {
      // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
  
      const nueva_Entrada = await this.model.create_Entrada({ input: result.data })
  
      res.status(201).json(nueva_merma)
    }



  
}