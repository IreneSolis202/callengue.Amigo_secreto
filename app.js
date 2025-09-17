// Array para guardar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpiar campo
  actualizarLista();
}

// Función para actualizar la lista
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar lista

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML =
    "🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}

