## Ejercicio Propuesto - Lista de Usuarios

Este proyecto implementa una lista de usuarios obtenidos a través de una petición REST a https://jsonplaceholder.typicode.com/users. Utiliza la tecnología ReactJS en conjunto con Material-UI (Mui) para construir una interfaz de usuario interactiva y responsive. Además, se utiliza la biblioteca Notistack para mostrar alertas.

## Visitar sitio web

Visita la página web en https://lista-usuarios-fb.netlify.app para obtener más información.

### Requisitos

- Realizar una petición REST a la URL mencionada para obtener los usuarios.
- Mostrar los siguientes datos de cada usuario:
  - Nombre de usuario
  - Username
  - Email
  - Ciudad de residencia
  - Teléfono
  - Nombre de la empresa
- La información de los usuarios no debe ser visualizada en una tabla, sino de una manera que consideres adecuada y visualmente atractiva.
- Agregar un único buscador que permita filtrar los usuarios por nombre, email y ciudad en tiempo real.
- La aplicación debe ser responsive, es decir, adaptarse a diferentes tamaños de pantalla para una experiencia de usuario óptima en dispositivos móviles y de escritorio.

### Instalación y Ejecución

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

### `npm install`

4. Después de la instalación, ejecuta el siguiente comando para iniciar la aplicación:

### `npm start`

5. La aplicación se ejecutará en tu navegador predeterminado. Si no se abre automáticamente, puedes acceder a ella en la siguiente URL: http://localhost:3000.

6. Para poder correr los test unitarios, ejecuta el siguiente comando para iniciar el test:

### `npm run test`

### Estructura del Proyecto

El proyecto sigue una estructura básica de una aplicación ReactJS, con los siguientes archivos y directorios importantes:

- `src/`: Directorio principal que contiene todo el código fuente de la aplicación.
- `components/`: Directorio que almacena los componentes utilizados en la interfaz de usuario.
- `views/`: Directorio que contiene las páginas principales de la aplicación.
- `App.js`: Componente raíz de la aplicación que define la estructura general.
- `index.js`: Punto de entrada de la aplicación.
- `public/`: Directorio que contiene los archivos estáticos públicos de la aplicación.
