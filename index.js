var body = {
  numeroDocumento: "8798",
  tipoDocumento: 1,
  primerNombre: "jair",
  primerApellido: "diaz",
  data: {
    holaqueHace: {
      esteDatosEsNuevo: true,
    },
    esteOtroDatoTambien: false,
    pruebaCadena: "jsfhskjfhksd",
    pruebaArregloCadena: ["jsfhskjfhksd", "djsjfhkjsd"],
    pruebaArregloObjeto: [{ test: "jsfhskjfhksd", test2: "djsjfhkjsd" }],
    veiculos: [
      {
        placa: "22222",
        modelo: 2006,
        tipo: "automovil",
        cilidraje: 1400,
      },
      {
        id: "bty787",
        tipo: "moto",
      },
    ],
    informacionContacto: {
      test: [
        {
          test: [
            {
              test: [
                {
                  test: [
                    {
                      test: "valor",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      telefonos: ["38127368712", "827831729381"],
      correos: ["correo2@tuyewturw"],
    },
  },
};

function jsonPath(json, prefix) {
  prefix = prefix || "$";
  return Object.keys(json).reduce(function (path, key) {
    var value = json[key];
    if (typeof value === "object") {
      path.push.apply(path, jsonPath(value, prefix + "." + key));
    } else {
      path.push(prefix + "." + key);
    }
    return path;
  }, []);
}

console.time("jsonPath");
console.log(jsonPath(body).join("\n"));
console.timeEnd("jsonPath");
