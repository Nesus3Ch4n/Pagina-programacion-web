//obtener referencais a objetos de la pagina
const list = document.querySelector("ul");
const input = document.getElementById("nombre");
const button = document.getElementById("add");

//agregar funcion de agregar un nuevo item a la pagina.
//parametros: 1) Evento 2) funcion que maneje el evento
button.addEventListener("click", () => {
    const newName = input.value;
    input.value = "";

    //nuevos elementos a crear: 
    const newItem = document.createElement("li");
    const itemText = document.createElement("span");
    const itemButton = document.createElement("button");

    newItem.appendChild(itemText);
    itemText.textContent = newName;

    newItem.appendChild(itemButton);
    itemButton.textContent = "Eliminar";

    list.appendChild(newItem);

    //falta agregar la funcionaldad del boton eliminar item:

    itemButton.addEventListener("click", () => {
        list.removeChild(newItem);
    });
    input.focus();
});
