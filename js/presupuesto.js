function validar(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const telefono = document.getElementById("telefono").value
    const email = document.getElementById("email").value
    if (!/^[A-z]{0,15}$/.test(nombre))
        {alert('El nombre debe tener 15 caracteres como maximo y solo letras')
        }


    if (!/^[A-z]{0,40}$/.test(apellido))
        {alert('El apellido debe tener 40 caracteres como maximo y solo letras')
        }

    if (!/^[0-9]{9}$/.test(telefono))
        {alert('El telefono debe tener 9 dígitos y solo númericos')
        }

    if (!/^(.+@.+..+)$/.test(email))
    {alert('El email no es correcto')
    }
}

enviar.addEventListener('click', () => {
validar()
});

function calcular(){
    const producto = document.getElementById("producto")
    const precioProducto = producto.value
    const precio = document.getElementById("precio")
    precio.value = precioProducto
    const plazo = document.getElementById("plazo").value
    precio.value = parseInt(precio.value) + 2*plazo
    const color = document.getElementById("color").checked
    const tipografia = document.getElementById("tipografia").checked
    const terminacion = document.getElementById("terminacion").checked
    const npersonalizado = document.getElementById("npersonalizado").checked
    if (color){
        precio.value = parseInt(precio.value) + 2
    }
    if (tipografia){
        precio.value = parseInt(precio.value) + 3
    }
    if (terminacion){
        precio.value = parseInt(precio.value) + 4
    }
    if (npersonalizado){
        precio.value = parseInt(precio.value) + 5
    }
}

producto.addEventListener('change', () => {
calcular()
})
plazo.addEventListener('change', () => {
calcular()
}) 
color.addEventListener('change', () => {
calcular()
})
tipografia.addEventListener('change', () => {
calcular()
})
terminacion.addEventListener('change', () => {
calcular()
})
npersonalizado.addEventListener('change', () => {
calcular()
})

