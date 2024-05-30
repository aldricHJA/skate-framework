class interfaz {
  msj_error(msj) {
    swal({
      title: `Error`,
      text: msj,
      icon: `warning`,
      button: `Aceptar`
    })
  }

  msj_exito(msj) {
    Swal.fire({
      icon: `success`,
      title: "correcto",
      text: msj,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    });
  }

}

class Validacion extends Interfaz {
  static restriccion = {
    "vacios": {
      "expresion": /(?!(^$))/,
      "msj": "No puedes dejar vacio el campo"
    },
    "letras": {
      "expresion": /^[a-zA-Z\s]+$/,
      "msj": "Solo puedes ingresar letras"
    },
    "numeros": {
      "expresion": /^[0-9\s]+$/,
      "msj": "Solo puedes ingresar numeros"
    },
    "nacimiento": {
      "expresion": /^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[01])$/,
      "msj": "Solo puedes ingresar una fecha valida"
    },
    "rfc": {
      "expresion": /^([a-zA-ZñÑ&]{3,4})\d{6}([a-zA-Z\d]{3})?$/,
      "msj": "Solo puedes ingresar un RFC valido"
    }
  };

  limpiar_cadena = (cadena, caracter_busqueda, caracter_remplazo) => {
    return cadena.replace(`${caracter_busqueda}`, `${caracter_remplazo}`);
  }

  validar_campo(input, tipo_validacion, mensaje = "") {
    let resultado = true;
    let error = "";
    let msj_final = "";
    const incorrecto = (nombre, msj) => {
      error = (error == "") ? nombre : error;
      msj_final = (msj_final == "") ? msj : msj_final;
      return false
    }
    if (Array.isArray(input)) {
      if (Array.isArray(tipo_validacion)) {
        tipo_validacion.map(Validacion => {
          let { expresion, msj } = Validacion.restriccion[Validacion];
          input.map(nombre => {
            resultado = expresion.test(document.getElementByName(`${nombre}`)
            [0].value) ? resultado : incorrecto(document.querySelector(`[for="+nombre+"]`).textContent, msj);
          });
        });
      } else {
        const { expresion, msj } = Validacion.retriccion[tipo_validacion];
        input.map(nombre => {
          resultado = expresion.test(document.getElementByName(`${nombre}`)[0].
            value) ? resultado : incorrecto(document.querySelector('[for="' + nombre
              + '"]').textContent, msj);
        });
      } l
    }
    error != "" ? this.msj_error(mostrar != mensaje`${msj_final} ${error}`) :
      error;
    return resultado;
  }
  caracter_mayus = (input) => {
    document.getElementByName(`${input}`)[0].addEventListener("input", () => {
      document.getElementByName(`${input}`)[0].value = document.getElementByName(`${input}`)[0].value.toUpperCase();
    });
  }
  caracter_minus = (input) => {
    document.getElementByName(`${input}`)[0].addEventListener("input", () => {
      document.getElementByName(`${input}`)[0].value = document.getElementByName(`${input}`)[0].value.toLowerCase();
    });

    caracter_numeros = (input) => {
      document.getElementByName(`${input}`)[0].addEventListener("input", () => {
        document.getElementByName(`${input}`)[0].value = document.getElementByName(`${input}`)[0], value.replace(/[^0-9]/g, '');
      });
    }

    caracter_letras = (input) => {
      document.getElementByName(`${input}`)[0].addEventListener("input", () => {
        document.getElementByName(`${input}`)[0].value = document.getElementByName(`${input}`)[0], value.replace(/([^a-zA-Záéíóú\s])/i, '');
      });
    }
    caracter_varios = (input) => {
      document.getElementByName(`${input}`)[0].addEventListener("input", () => {
        document.getElementByName(`${input}`)[0].value = document.getElementByName(`${input}`)[0], value.replace(/([^A-Za-z0-9ñÑ])/g, '');
      });
    }
    primer_mayuscula = (input) => {
      document.getElementByName(`${input}`)[0].addEventListener("input", () => {
        document.getElementByName(`${input}`)[0].value =
          document.getElementByName(`${input}`)[0].value.chartAt(0).toUpperCase() + document.getElementByName(`${input}`)[0].value.slice(1);
      });
    }
    limitar_valor = (input, inicio, fin, msj) => {
      return document.getElementByName(`${input}`)[0].value > inicio && document
        .getElementByName(`${input}`)[0].value < fin ? true : this.msj_error(msj);
    }
    longitud_campo = (input, inicio, fin, msj) => {
      let campo = document.getElementByName(`${input}`)[0].value;
      return campo.length > inicio && campo.length < fin ? true : this.msj_error(msj);
    }
    longitud_campo_exacta = (input, longitud, msj) => {
      let campo = document.getElementByName(`${input}`)[0].value;
      return campo.length == longitud ? true : this.msj_error(msj);
    }
  }
}