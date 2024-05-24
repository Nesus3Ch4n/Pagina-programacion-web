const list = document.getElementById("section-integrantes");
const input = document.getElementById("nombre");
const input2 = document.getElementById("info");
const button = document.getElementById("add");

button.addEventListener("click", () => {
    const newInter = input.value;
    input.value = "";

    const newInfo = input2.value;
    input2.value = "";

    //nuevos elementos a crear: 
    const newItem = document.createElement("div");
    newItem.classList.add("nuevoIntegrante");

    const itemText = document.createElement("h1");
    const itemInfo = document.createElement("h5");
    //leer una imagen
    const itemImg = document.createElement("img");
    itemImg.id="imagen";
    itemImg.src = "img/doggy.jpg";

    
    const space = document.createElement("br");
    const itemButton = document.createElement("button");

    //mostrar en la pagina

    newItem.appendChild(itemText);
    itemText.textContent = newInter;

    newItem.appendChild(itemInfo);
    itemInfo.textContent = newInfo;

    

    newItem.appendChild(itemImg);
    itemImg.textContent = "Profile";
    newItem.appendChild(space);
    newItem.appendChild(itemButton);
    itemButton.textContent = "Eliminar Integrante";
    
    list.appendChild(newItem);


    //falta agregar la funcionaldad del boton eliminar item:

    itemButton.addEventListener("click", () => {
        list.removeChild(newItem);
    });
    input.focus();
});
