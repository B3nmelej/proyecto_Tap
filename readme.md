Sistema de Gestión Web
Este es un proyecto de un Sistema de Gestión Web que permite la administración de trabajadores, mermas, entradas, y asignaciones. El sistema está construido con Node.js y Express, utilizando una base de datos MySQL para la gestión de los datos.

Características
Gestión de Trabajadores: Consulta de trabajadores del sistema según su rol.
Control de Mermas: Creación y consulta de registros de mermas.
Registro de Entradas: Consulta y creación de entradas de productos.
Asignación de Tareas: Asignación de tareas a trabajadores y consulta de sus asignaciones.
API REST: Se expone una API REST para interactuar con las funcionalidades del sistema.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express.js: Framework de Node.js para la creación de servidores web.
MySQL2: Cliente de MySQL para la gestión de la base de datos con soporte para Promesas.
dotenv: Cargar variables de entorno desde un archivo .env.
ES6+: Uso de la sintaxis moderna de JavaScript como clases, async/await, y destructuración.
Kanban: Metodología de gestión de proyectos utilizada para organizar el trabajo.
Instalación
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/tu-repositorio/sistema-gestion.git
cd sistema-gestion
Instalar las dependencias:

Asegúrate de tener Node.js instalado en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias:

bash
Copiar código
npm install
Configurar las variables de entorno:

Crea un archivo .env en la raíz del proyecto con la siguiente estructura:

env
Copiar código
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PORT=3306
MYSQL_PASSWORD=tu_contraseña
MYSQL_DATABASE=sistema_gestion
Configuración de la base de datos:

Asegúrate de tener una base de datos MySQL configurada con el nombre que especificaste en el archivo .env. Luego, importa las tablas necesarias usando los scripts SQL disponibles (si los hay).

Iniciar el servidor:

Ejecuta el siguiente comando para iniciar el servidor:

bash
Copiar código
npm start
El servidor se ejecutará en http://localhost:1234.

Uso de la API
Endpoints Disponibles
Método	Ruta	Descripción
GET	/sistema/trabajadores	Obtiene una lista de todos los trabajadores
GET	/sistema/merma?fecha=YYYY-MM-DD	Obtiene las mermas registradas en una fecha específica
POST	/sistema/create-merma	Crea un nuevo registro de merma
GET	/sistema/create-entrada	Obtiene una lista de todas las entradas
GET	/sistema/asignaciones?id=ID	Obtiene las asignaciones de un trabajador
Ejemplo de Solicitud
Para obtener la lista de trabajadores, puedes hacer una solicitud GET a:

bash
Copiar código
http://localhost:1234/sistema/trabajadores
Crear Merma (POST)
bash
Copiar código
POST /sistema/create-merma
Cuerpo de la Solicitud (JSON):

json
Copiar código
{
  "fecha_merma": "2024-09-27",
  "cantidad": 5,
  "motivo": "Producto dañado",
  "id_entrada": 3
}
Metodología de Desarrollo
El proyecto se gestionó utilizando la metodología Kanban, lo que permitió organizar el desarrollo de las funcionalidades de manera eficiente y clara. El tablero de Kanban incluyó las siguientes fases:

Por hacer: Tareas pendientes que aún no se han iniciado.
En progreso: Funcionalidades que se están desarrollando activamente.

Próximos Pasos
Autenticación: Implementar un sistema de autenticación para proteger las rutas.
Optimización: Mejorar el rendimiento de las consultas a la base de datos.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

