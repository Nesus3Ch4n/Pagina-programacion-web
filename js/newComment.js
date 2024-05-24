
const comentarios = document.getElementById("comentariosC");
const comentario = document.getElementById("comentario");
const enviar = document.getElementById("enviar");


enviar.addEventListener("click", () => {

    const div = document.querySelector('div')

    const nuevoCommentarios = comentario.value;
    comentario.value = "";

    const nuevoComentario = document.createElement("h6");
    const texto = document.createElement("span");
    const like = document.createElement("button");

    nuevoComentario.appendChild(texto);
    texto.textContent = nuevoCommentarios;

    nuevoComentario.appendChild(like);
    like.textContent = "Like";

    comentarios.appendChild(nuevoComentario);

    like.addEventListener("click", () => {
        //

    });
    comentario.focus();

});