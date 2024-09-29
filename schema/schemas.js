import zod from 'zod'
const z = zod

const mermaSchema = z.object({
  fecha_merma: z.date({invalid_type_error: 'fecha debe ser un date'}),
  cantidad: z.number.int({invalid_type_error: 'cantidad debe ser un int'}),
  motivo: z.string({invalid_type_error: 'motivo debe ser un string'}),
  id_entrada: z.number().int({invalid_type_error: 'id debe ser un int'}),
})

const entradaSchema = z.object({
  descripcion: z.string({invalid_type_error: 'descripcion debe ser un string'}),
  id_usuario: z.number.int({invalid_type_error: 'id debe ser un int'}),
  cantidad: z.number.int({invalid_type_error: 'cantidad debe ser un int'}),
  id_almacen: z.number().int({invalid_type_error: 'id debe ser un int'}),
  fecha_entrada: z.number.int({invalid_type_error: 'fecha debe ser un int'})
})

export function validarMerma (object){
  return mermaSchema.safeParse(object)
}
export function validarEntrada (object){
  return entradaSchema.safeParse(object)
}