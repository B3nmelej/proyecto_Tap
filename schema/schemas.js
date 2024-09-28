import zod from 'zod'
const z = zod

const usuarioSchema = z.object({
  nombre: z.string({invalid_type_error: 'nombre debe ser un string'}),
  apellido: z.string({invalid_type_error: 'apellido debe ser un string'}),
  correo: z.string({invalid_type_error: 'correo debe ser un string'}),
  rol: z.number().int({invalid_type_error: 'nombre debe ser un int'}),
})

export function validateUsuario (object){
  return usuarioSchema.safeParse(object)
}

