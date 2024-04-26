// const alert =({"message":"Hola mundo"})

// const respuesta = confirm("¿Estás seguro") //Devuelve un True o un False, dependindo si selecciona aceptar o cancelar
// console.log(respuesta)

console.groupCollapsed("My first function")
function saludar (grupo){  //parametro se define para la función
    console.log(`Hola ${grupo}, hoy es un nuevo día`)   
}

saludar("Enfermeras")
saludar("Coders")

console.groupEnd()

console.groupCollapsed("Ejercicio")
console.log(`Necesitamos un programa que envíe una notificación al celular de los coders,
se debe enviar una notificacion de los coders, se debe enviar una notificación
para saludar y tambien debe de enviar una notificacion al coder al despesdir,
en ambos casos se debe dar en la notificación el nombre del coder.`)

function notificacionSaludar (coder){
    console.log(`Hola ${coder}, Bienvenido a un nuevo día de aprendizajes y retos!!!`)
}

function notificacionDespedir (coder){
 
    console.log(`Hasta pronto ${coder}, DDescansa y recuperate para continuar en tu proceso!!!`)
}


notificacionSaludar("Juan Talavera")

notificacionDespedir("Juan Talavera")

console.groupEnd()


console.groupCollapsed("Devolver un resultado de una funcion sin imprimir")

function sumarDosNumeros(numero1,numero2){
    let respuesta = numero1 + numero2
    return respuesta
}

let total=sumarDosNumeros(1,2)

console.log(`La suma es: ${total}`)


console.groupEnd()


console.group("Ejercicio 2")
console.log(`Desarrolar un programa que solicite un usuario y contraseña, 
si el usuario "admin" y la contraseña es 12345 debo mostrar el mesaje 
"bienvenido NombreDelUsuario"

En caso de que el login no sea correto debe mostrar por consola y por 
alerta una mesaje de error `)

const user=prompt("Digita tu usuario").toLowerCase()
const password=Number.parseInt(prompt("Digita tu clave"))

function validarUsuario(user, password) {
    if (user=="admin" && password==12345) {
        alert(`Bienvenido ${user}`)
        console.log(`Bienvenido ${user}`)
    }else{
        alert("Error")
        console.error("Error")
    }
}

validarUsuario(user, password)
console.groupEnd()