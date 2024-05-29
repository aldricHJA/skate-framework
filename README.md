<h1> Documentación de SkateFramework <img src ="https://media.tenor.com/A_QSdxYaEtEAAAAi/barf-rick.gif" width = "60px"> </h1>
<h2>Introducción</h2>
El SkateFramework es un framework MVC minimalista inspirado en Laravel, creado para simplificar el desarrollo de aplicaciones web mediante una estructura clara y accesible. 
Basado en Node.js, maneja modelos, vistas y controladores de manera eficiente y ofrece una configuración sencilla para la conexión a bases de datos.

<h2>Características Principales</h2>
<ul style="list-style-type: disc;">
  <li><strong>Estructura Intuitiva:</strong> Organiza tu código de manera lógica y ordenada, siguiendo los principios del diseño MVC.</li>
  <li><strong>Configuración Simple:</strong> Configuración rapida a la conexión a bases de datos y otros servicios esenciales.</li>
  <li><strong>CLI Integrado:</strong> Herramientas de línea de comandos para la generación de modelos, vistas y controladores.</li>
  <li><strong>ORM Integrado:</strong> Administra tus datos de manera eficiente con un ORM sencillo, que soporta las operaciones CRUD básicas.</li>
  <li><strong>Basado en Node.js:</strong> Aprovecha la flexibilidad y rendimiento de Node.js.</li>
</ul>

<h2>Instalación</h2>
<h3><strong>Requisitos</strong></h3>
<ul style="list-style-type: disc;">
  <li>Node.js (v12 o superior)</li>
  <li>NPM o YARN (Node Package Manager, gestor de paquetes de Node.js)</li>
</ul>
<h3><strong>Pasos de Instalació</strong>n</h3>
1. Clonar el Repositorio: Clona el repositorio desde GitHub y navega al directorio del proyecto:

 ```sh
 git clone https://github.com/aldricHJA/skate-framework
 cd skate-framework
 ```

2. <strong>Instalar las Dependencias:</strong> Ejecuta el siguiente comando para instalar las dependencias del proyecto:

 ```sh
 npm install
 ```
   
3. <strong>Configurar el Archivo ```.env```:</strong> Configura tu archivo ```.env``` para hacer la conexión a la base de datos:
```sh
PUERTO = 3306
USUARIO = 'nombre_usuario'
PASSWORD = 'contraseña'
HOST = 'localhost'
DBNAME = 'nombre_base_datos'
```

<h2>Uso Básico</h2>
<strong>creacion de modelo, controlador y vista mediante los comandos CLI.</strong>
<hr>
El <strong>skateFramework</strong> incluye una <strong>CLI</strong> que va a facilitar la generación de componentes en el skateFramework

1. <strong>Crear modelo</strong>
```sh
node skate model ejemplo1
```

2. <strong>Crear controlador</strong>
```sh
node skate controller ejemplo1
```

3. <strong>Crear vista</strong>
```sh
node skate view ejemplo1
```
<hr>
<h2><strong>Uso Avanzado</strong></h2>
<h3>Compilación de Archivos</h3>
<ul style= "list-style-type: disc;">
  <li>Comando para compilar archivos en el proyecto</li>
</ul>

```sh
npm run build
```
Este comando ejecutará el script definido en el archivo package.json, que utilizará Babel para compilar los archivos del directorio src en JavaScript compatible con versiones anteriores de Node.js. 
El resultado se almacenará en el directorio controller. 
Este script generalmente se encarga de construir el proyecto para producción, 
lo cual puede incluir tareas como:
<ul>
  <li><strong>Minificación:</strong> Reducir el tamaño de los archivos eliminando espacios en blanco, comentarios y otras partes innecesarias del código.</li>
  <li><strong>Empaquetado:</strong> Combinar múltiples archivos JavaScript en uno solo, lo cual puede mejorar el rendimiento de la aplicación.</li>
  <li><strong>Transpilación:</strong> Convertir código moderno de JavaScript (ES6 y superiores) a una versión compatible con navegadores más antiguos usando herramientas como Babel.</li>
  <li><strong>Optimización:</strong> Aplicar técnicas para mejorar el rendimiento, como la compresión de imágenes y otros recursos estáticos</li>
  <li><strong>Generación de archivos estáticos:</strong> Crear versiones estáticas de las páginas o componentes de la aplicación.</li>
</ul>

<h2>Estructura del proyecto</h2>
Así se vera el proyecto ya que haya sido compilado:

```sh
skateback/
├── app/
│   └── config/
│       └── Conexion.php
│       └── Config.php
│       └── MyRoutes.php
│       └── ORM.php
│       └── View.php
│       └──
│   └── controller/
│       └── skateValidaciones.controller.js
│   └── model/
│       └── ejemplo1.php
├── node_modules/
├── public/
│       └── css/
│       └── img/
│       └── js/
├── src/
│       └── mskateValidaciones.controller.js
├── vendor/
├── view/
│       └── ejemplo1.view.php
├── composer.json
├── composer.lock
├── skate.js
├── index.php
├── package-lock.json
└── package.json
```
Después de la compilación, los archivos JavaScript ubicados en el directorio src serán compilados y almacenados en el directorio controller.

<hr>
<h2>Autores</h2>
<h3>Autor principal <img src ="https://media.tenor.com/JQnBv9Po33wAAAAi/qoobee-taking-notes.gif" width = "60px"></h3>
Jimenez Ayala Aldrich (aldricHJA)
