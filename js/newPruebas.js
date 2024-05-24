// Crear un nuevo elemento div
const list = document.getElementById("nuevoIntegrante");
const input = document.getElementById("nombre");
const button = document.getElementById("add");

button.addEventListener("click", () =>{
    const newInter = input.value;
    input.value = "";
 
    //nuevos elementos a crear:
    const newDiv = document.createElement("div");
    newDiv.classList = "integrantes";
    const newItem = document.createElement("span");
    const newText = document.createElement("strong");

    newDiv.appendChild(newItem);

    newItem.appendChild(newText);
    newText.textContent = newInter;

    
    list.appendChild(newDiv);
});
