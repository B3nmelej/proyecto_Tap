
export class Controller {
  constructor ({ Model }) {
    this.model = Model
  }

  get_trabajadores = async (req, res) => {
    const trabajadores = await this.model.Get_Trabajadores()
    res.json(trabajadores)
  }

  // get_Merma = async (req, res) => {
  //   const { fecha } = req.query
  //   const merma = await this.model.Get_Merma({ fecha })
  //   if (merma) return res.json(merma)
  //   res.status(404).json({ message: 'not found' })
  // }

  // create = async (req, res) => {
  //   const result = validateMovie(req.body)

  //   if (!result.success) {
  //   // 422 Unprocessable Entity
  //     return res.status(400).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newMovie = await this.movieModel.create({ input: result.data })

  //   res.status(201).json(newMovie)
  // }

  // delete = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.movieModel.delete({ id })

  //   if (result === false) {
  //     return res.status(404).json({ message: 'Movie not found' })
  //   }

  //   return res.json({ message: 'Movie deleted' })
  // }

  // update = async (req, res) => {
  //   const result = validatePartialMovie(req.body)

  //   if (!result.success) {
  //     return res.status(400).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const { id } = req.params

  //   const updatedMovie = await this.movieModel.update({ id, input: result.data })

  //   return res.json(updatedMovie)
  // }
}