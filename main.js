function solicitarNombre(){
    let nombre = prompt("¿Cuál es tu nombre?")
    alert("Hola, " + nombre + " ¡bienvenido a Gef!")
} 

solicitarNombre();

confirm("¿Estás listo para pedir?")

let prendaCantidad = prompt("¿Cuántas prendas desea pedir?")

let prenda = 30

let subtotal = prenda * prendaCantidad

let totalConEnvio = subtotal + 5

let intereses = subtotal * 0.15

let credito = prompt("¿En cuántas cuotas lo desea? Los intereses son del 15%")

if((prendaCantidad>=3)&&(credito>=2)){
    alert ("¡Tiene envío gratis! El precio final será: $" + (subtotal + intereses)); 
} else if((prendaCantidad>=3)&&(credito=1)){
    alert ("¡Tiene envío gratis! El precio final será: $" + subtotal); 
} else if((prendaCantidad<3)&&(credito>=2)){
    alert ("El costo por envío es $5. El precio final será: $" + (totalConEnvio + intereses))
} else{
    alert ("El costo por envío es $5. El precio final será: $" + totalConEnvio ) 
}

