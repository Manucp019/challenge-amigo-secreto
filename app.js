<<<<<<< HEAD
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación: solo letras y espacios
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === '') {
        alert('Ingrese un nombre.');
        return;
    }

    if (!soloLetras.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        input.value = '';
        input.focus();
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = '';
    input.focus();
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>el amigo sorteado es: ${amigoSorteado}</li>`;
}

=======
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación: solo letras y espacios
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === '') {
        alert('Ingrese un nombre.');
        return;
    }

    if (!soloLetras.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        input.value = '';
        input.focus();
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = '';
    input.focus();
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}



>>>>>>> bbf626f2af5079430e55a27606abae5aafc482a1
