// Objetos Literales

var objetoVacio = {}

var pedro = {
  nombre: 'Pedro',
  apellido: 'Perez',
  hello: function() {
    return 'Hola ' + this.nombre
  }
}

console.log(pedro.hello())
console.log('Hola ' + pedro.nombre)
// cosole.log("Hola " + pedro.nombre)

// class Persona do
//   def initialize(nombre, apellido)
//     @nombre = nombre
//     @apellido = apellido
//   end
//
//   def hello
//     puts "Hola #{@nombre}"
//   end
// end

// persona1 = Persona.new("pedro", "perez")
// persona1.edad

// Funciones Constructoras
var Persona = function(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

var persona1 = new Persona('Pedro', 'Perez')
console.log(persona1.nombre + ' ' + persona1.apellido)
console.log(persona1['nombre'] + ' ' + persona1['apellido'])

console.log((persona1.edad = 20))
console.log((persona1['edad'] = 20))

console.log((persona1.nombre = 'Ana'))
console.log(delete persona1.edad)

for (var key in pedro) {
  console.log(key + ': ' + pedro[key])
}

// class Persona do
//   def initialize(nombre, apellido)
//     @nombre = nombre
//     @apellido = appelido
//     @edad = edad
//   end
// end
//
// persona1 = Persona.new("pedro", "perez")
// persona1.edad
