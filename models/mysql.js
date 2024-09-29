import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
// cargar variables de entorno
dotenv.config({ path: '../.env' });

const DEFAULT_CONFIG = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}

//crear la conexion a la BD
const connection = await mysql.createConnection(DEFAULT_CONFIG)

export class Model {
  static async Get_Merma({ fecha }) {
    console.log('GetMerma');

    // Manejar errores en caso de que la consulta falle
    try {
      if (fecha) {
        // Realizar la consulta
        const [merma_rows] = await connection.query(
          `SELECT * FROM mermas WHERE fecha = ?;`,
          [fecha]
        );
        // Retornar el resultado de la consulta
        return merma_rows;
      } else {
        throw new Error('La fecha es requerida');
      }
    } catch (error) {
      console.error('Error al obtener las mermas:', error.message);
      throw error;  // Volver a lanzar el error para que sea manejado por quien llame al método
    }
  }
  static async Get_Trabajadores() {
    console.log('getTrabajadores');
    // Manejar errores en caso de que la consulta falle
    try {
        // Realizar la consulta
        const [trabajadores_rows] = await connection.query(
          `SELECT id_usuario, nombre, apellido FROM usuarios WHERE id_rol = 2;`,
        );
        // Retornar el resultado de la consulta
        return trabajadores_rows;
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error.message);
      throw error;  // Volver a lanzar el error para que sea manejado por quien llame al método
    }
    
  }
  static async Get_Entradas() {
    console.log('get Entradas');
    // Manejar errores en caso de que la consulta falle
    try {
        // Realizar la consulta/ devuelve todas las entradas
        const [entradas_rows] = await connection.query(
          `SELECT * FROM entradas;`,
        );
        // Retornar el resultado de la consulta
        return entradas_rows;
    } catch (error) {
      console.error('Error al obtener las entradas:', error.message);
      throw error;  // Volver a lanzar el error para que sea manejado por quien llame al método
    }
  }

  static async Get_Asignaciones_Trabajador({ id }) {
    console.log('GetMerma');

    // Manejar errores en caso de que la consulta falle
    try {
      if (id) {
        // Realizar la consulta
        const [asignaciones_rows] = await connection.query(
          `SELECT * FROM asingnaciones WHERE id_usuario=?;`,
          [id]
        );
        // Retornar el resultado de la consulta
        return asignaciones_rows;
      } else {
        throw new Error('La fecha es requerida');
      }
    } catch (error) {
      console.error('Error al obtener las asignaciones:', error.message);
      throw error;  // Volver a lanzar el error para que sea manejado por quien llame al método
    }
  }

  
  static async Create_Merma ({input}){
    const { 
      fecha_merma,
      cantidad,
      motivo,
      id_entrada
    } = input
    try{
      await connection.query(
        `INSERT INTO merma (fecha_merma, cantidad, motivo, id_entrada)
        VALUES (?, ?, ?, ?)`,
       [fecha_merma, cantidad, motivo, id_entrada]
      )
      // Retornar el ID del nuevo registro insertado
      return console.log('exitoso')
    } catch (error) {
      console.error('Error al crear la merma:', error.message);
      throw error; // Lanzar el error para que sea manejado por quien llame al método
    }
  }
  static async Create_Entrada ({input}){
    const { 
      descripcion,
      id_usuario,
      cantidad,
      id_almacen,
      fecha_entrada
    } = input
    try{
      await connection.query(
        `INSERT INTO merma (fecha_merma, cantidad, motivo, id_entrada)
        VALUES (?, ?, ?, ?)`,
       [descripcion, id_usuario, cantidad, id_almacen, fecha_entrada,]
      )
      // Retornar el ID del nuevo registro insertado
      return console.log('exitoso')
    } catch (error) {
      console.error('Error al crear la entrada:', error.message);
      throw error; // Lanzar el error para que sea manejado por quien llame al método
    }
  }
  
}

