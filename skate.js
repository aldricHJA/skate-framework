import fs, { existsSync } from "fs";

//writeFile
//existsSync
//mkdir

class Delantero {
  constructor() {
    this.tipoArchivo = {
      controlller: (nombreArchivo) => `<?php\n\nnamespace controller;\n\nuse config\\View;\n\nrequire_once realpath(".../../vendor/autoload.php");\n\nclass ${nombreArchivo} extends View\n{\n    public function index()\n    {\n\n    }\n}\n\n$controlador = new ${nombreArchivo}();`,
      model: (nombreArchivo) => `<?php\n\nnamespace model;\n\nuse config\\ORM;\n\nclass ${nombreArchivo} extends ORM\n{\n    protected $tabla = '';\n    protected $idTabla = '';\n}`,
      view: () => '\n<div class="container mt-2">\n\t<div class="row mt-2 justify-content-center">\n\t\t<div class="col mt-2">\n\t\t</div>\n\t</div>\n</div>\n',
    };
  }

  comprobarRuta(ruta, tipo) {
    const rutaCompleta = `./${tipo}/${ruta}`;
    if (!existsSync(rutaCompleta)) {
      fs.mkdir(rutaCompleta, { recursive: true }, (error) => {
        if (!error) {
          console.log("Se creó la carpeta correctamente");
        } else {
          console.error("Error al crear la carpeta");
        }
      });
    }
  }

  comprobarRutaVista(ruta) {
    const rutaCompleta = `./view/${ruta}`;
    if (!existsSync(rutaCompleta)) {
      fs.mkdir(rutaCompleta, { recursive: true }, (error) => {
        if (!error) {
          console.log("Se creó la carpeta correctamente");
        } else {
          console.error("Error al crear la carpeta");
        }
      });
    }
  }

  crearArchivo([tipo, nombreArchivo, ruta = ""]) {
    let rutaCompleta;
    let contenido;

    if (tipo === 'view') {
      this.comprobarRutaVista(ruta);
      contenido = this.tipoArchivo[tipo]();
      rutaCompleta = `./view/${ruta}/${nombreArchivo}.view.php`;
    } else {
      this.comprobarRuta(ruta, tipo);
      contenido = this.tipoArchivo[tipo](nombreArchivo);
      rutaCompleta = `./app/${tipo}/${ruta}/${nombreArchivo}.php`;
    }

    fs.writeFile(rutaCompleta, contenido, (error) => {
      if (!error) {
        console.log("Archivo creado correctamente!!!");
      } else {
        console.error("Error al crear el archivo");
      }
    });
  }
}

let delantero = new Delantero();

let comando = process.argv.slice(2);

delantero.crearArchivo(comando);