document.addEventListener('DOMContentLoaded', function() {

    // verPromos()

    verCafeteria()

    verPostres()

    verMenu()

    // verAlPlato()

    verSandwiches()

    verPizzas()

    verPastas()

    verPapas()

    verEmpanadas()

    verPicadas()

    verBebidas()
})

// function verPromos() {
//     const mobileMenu = document.querySelector('#botonPromos')

//     mobileMenu.addEventListener('click', mostrarPromos)
// }

// function mostrarPromos() {
//     const cardd = document.querySelector('.promos')

//     cardd.classList.toggle('mostrar')
// }

function verCafeteria() {
    const mobileMenu = document.querySelector('#botonCafeteria')

    mobileMenu.addEventListener('click', mostrarCafeteria)
}

function mostrarCafeteria() {
    const cardd = document.querySelector('.cafeteria')

    cardd.classList.toggle('mostrar')
}

function verPostres() {
    const mobileMenu = document.querySelector('#botonPostres')

    mobileMenu.addEventListener('click', mostrarPostres)
}

function mostrarPostres() {
    const cardd = document.querySelector('.postres')

    cardd.classList.toggle('mostrar')
}

function verMenu() {
    const mobileMenu = document.querySelector('#botonMenu')

    mobileMenu.addEventListener('click', mostrarMenu)
}

function mostrarMenu() {
    const cardd = document.querySelector('.menu')

    cardd.classList.toggle('mostrar')
}

// function verAlPlato() {
//     const mobileMenu = document.querySelector('#alPlato')

//     mobileMenu.addEventListener('click', mostrarAlPlato)
// }

// function mostrarAlPlato() {
//     const cardd = document.querySelector('.alPlato')

//     cardd.classList.toggle('mostrar')
// }

function verSandwiches() {
    const mobileMenu = document.querySelector('#botonSand')

    mobileMenu.addEventListener('click', mostrarSandwiches)
}

function mostrarSandwiches() {
    const cardd = document.querySelector('.sandwiches')

    cardd.classList.toggle('mostrar')
}

function verPizzas() {
    const mobileMenu = document.querySelector('#botonPizzas')

    mobileMenu.addEventListener('click', mostrarPizzas)
}

function mostrarPizzas() {
    const cardd = document.querySelector('.pizzas')

    cardd.classList.toggle('mostrar')
}

function verPastas() {
    const mobileMenu = document.querySelector('#botonPastas')

    mobileMenu.addEventListener('click', mostrarPastas)
}

function mostrarPastas() {
    const cardd = document.querySelector('.pastas')

    cardd.classList.toggle('mostrar')
}

function verPapas() {
    const mobileMenu = document.querySelector('#botonPapas')

    mobileMenu.addEventListener('click', mostrarPapas)
}

function mostrarPapas() {
    const cardd = document.querySelector('.bandeja')

    cardd.classList.toggle('mostrar')
}


function verEmpanadas() {
    const mobileMenu = document.querySelector('#botonEmpanadas')

    mobileMenu.addEventListener('click', mostrarEmpanadas)
}

function mostrarEmpanadas() {
    const cardd = document.querySelector('.empanadas')

    cardd.classList.toggle('mostrar')
}

function verBebidas() {
    const mobileMenu = document.querySelector('#botonBebidas')

    mobileMenu.addEventListener('click', mostrarBebidas)
}

function mostrarBebidas() {
    const cardd = document.querySelector('.bebidas')

    cardd.classList.toggle('mostrar')
}

function verPicadas() {
    const mobileMenu = document.querySelector('#botonPicadas')

    mobileMenu.addEventListener('click', mostrarPicadas)
}

function mostrarPicadas() {
    const cardd = document.querySelector('.picadas')

    cardd.classList.toggle('mostrar')
}