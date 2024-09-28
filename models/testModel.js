import { Model } from './mysql.js';  // Asegúrate de que la ruta sea correcta
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

async function testGetTrabajadores() {
  console.log('Iniciando prueba de Get_Trabajadores...');
  
  try {
    const trabajadores = await Model.Get_Trabajadores();
    console.log('Trabajadores:', trabajadores);
  } catch (error) {
    console.error('Error al obtener trabajadores:', error.message);
  }
}

testGetTrabajadores()