// Obtener elementos del DOM
const inputAlimento = document.getElementById("alimento");
const selectCategoria = document.getElementById("categoria");
const btnAgregar = document.getElementById("agregar");
const btnMostrarLista = document.getElementById("mostrar-lista");
const resultadoLista = document.getElementById("resultado-lista");

// Objeto para almacenar la lista de compras
const listaCompras = {
    Frutas: document.getElementById("frutas"),
    Lácteos: document.getElementById("lacteos"),
    Congelados: document.getElementById("congelados"),
    Dulces: document.getElementById("dulces"),
    Otros: document.getElementById("otros"),
};

// Función para agregar un alimento a la lista
function agregarAlimento() {
    const alimento = inputAlimento.value.trim();
    const categoria = selectCategoria.value;

    if (alimento !== "") {
        // Crear un nuevo elemento de lista
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = alimento;

        // Agregar el alimento a la categoría correspondiente
        listaCompras[categoria].appendChild(nuevoItem);

        // Limpiar el campo de entrada
        inputAlimento.value = "";
    } else {
        alert("Por favor, ingresa un alimento.");
    }
}

// Función para mostrar la lista en el área de texto
function mostrarLista() {
    let listaFinal = "";

    for (const categoria in listaCompras) {
        const items = listaCompras[categoria].querySelectorAll("li");
        if (items.length > 1) {
            listaFinal += `${categoria}: `;
            for (let i = 1; i < items.length; i++) {
                listaFinal += items[i].textContent;
                if (i < items.length - 1) listaFinal += ", ";
            }
            listaFinal += "\n";
        }
    }

    resultadoLista.value = listaFinal;
}

// Asignar la función al botón "Agregar"
btnAgregar.addEventListener("click", agregarAlimento);

// Asignar la función al botón "Mostrar Lista"
btnMostrarLista.addEventListener("click", mostrarLista);