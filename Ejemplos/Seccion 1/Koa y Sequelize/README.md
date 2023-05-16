# Demo Koa + Sequelize
_With 💖 from 🐱_

Puedes revisar los archivos de este práctico para ver cómo crear un servidor (muy, muy) básico con Koa y Sequelize.

## Cómo correr
- `yarn` para instalar dependencias.
- `sudo service postgresql start` levantar postgres en local. (Si no te reconoce el comando, debes instalar postgres en tu computador)
- `yarn sequelize-cli db:create` Crear base de datos de desarrollo.
- `yarn sequelize-cli db:migrate` Correr migraciones (crear tabla en DB)
- `yarn sequelize-cli db:seed:all` Llenar las tablas con seeds.
- `yarn dev` Levantar servidor 🎉. Deberías poder ver las rutas "/directors" y "/movies" con datos.

## Partes importantes
- `package.json`: Leer para ver qué librerias se usan.
- `index.js`: levanta el servidor solo si se conectó a la BDD.
- `config/`: configuración para conectarse al servidor.
- `models/`: carpeta con la definicion de los modelos.
- `migations/`: migraciones generadas a partir de los modelos, trasladan el modelado a la base de datos.
- `seeders/`: Carpeta con seeds, datos que se usan para poblar la BDD rápidamente.
- `src`: carpeta que contiene el ruteo de Koa. Importa los modelos de sequelize creados y los expone al acceder a la ruta.
