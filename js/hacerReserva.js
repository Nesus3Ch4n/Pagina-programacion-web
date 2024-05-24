//ZONA 1

document.getElementById("btn-reserva1").addEventListener("click", function () {

    var puestoColor = document.getElementById("puestos1");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto1");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;

    var botonLiberar = document.getElementById("btn-liberar1");
    var botonReserva = document.getElementById("btn-reserva1");
    
    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";

    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar1").addEventListener("click", function () {

    var puestoColor = document.getElementById("puestos1");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto1");

    var botonLiberar = document.getElementById("btn-liberar1");
    var botonReserva = document.getElementById("btn-reserva1");

    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";

    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto2");

    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;

    var botonLiberar = document.getElementById("btn-liberar2");
    var botonReserva = document.getElementById("btn-reserva2");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";

    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto2");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;

    var botonLiberar = document.getElementById("btn-liberar2");
    var botonReserva = document.getElementById("btn-reserva2");

    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";

    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva3").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos3");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto3");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar3");
    var botonReserva = document.getElementById("btn-reserva3");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar3").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos3");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto3");
    var botonLiberar = document.getElementById("btn-liberar3");
    var botonReserva = document.getElementById("btn-reserva3");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva4").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos4");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto4");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar4");
    var botonReserva = document.getElementById("btn-reserva4");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar4").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos4");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto4");
    var botonLiberar = document.getElementById("btn-liberar4");
    var botonReserva = document.getElementById("btn-reserva4");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva5").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos5");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto5");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar5");
    var botonReserva = document.getElementById("btn-reserva5");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar5").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos5");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto5");
    var botonLiberar = document.getElementById("btn-liberar5");
    var botonReserva = document.getElementById("btn-reserva5");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva6").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos6");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto6");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar6");
    var botonReserva = document.getElementById("btn-reserva6");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar6").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos6");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto6");
    var botonLiberar = document.getElementById("btn-liberar6");
    var botonReserva = document.getElementById("btn-reserva6");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

//ZONA 2

document.getElementById("btn-reserva2-1").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-1");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto1");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-1");
    var botonReserva = document.getElementById("btn-reserva2-1");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-1").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-1");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto1");
    var botonLiberar = document.getElementById("btn-liberar2-1");
    var botonReserva = document.getElementById("btn-reserva2-1");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2-2").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-2");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto2");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-2");
    var botonReserva = document.getElementById("btn-reserva2-2");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-2").addEventListener("click", function () {
    var puestoColor = document.getElementById("puesto2-2");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto2");
    var botonLiberar = document.getElementById("btn-liberar2-2");
    var botonReserva = document.getElementById("btn-reserva2-2");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2-3").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-3");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto3");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-3");
    var botonReserva = document.getElementById("btn-reserva2-3");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-3").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-3");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto3");
    var botonLiberar = document.getElementById("btn-liberar2-3");
    var botonReserva = document.getElementById("btn-reserva2-3");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2-4").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-4");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto4");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-4");
    var botonReserva = document.getElementById("btn-reserva2-4");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-4").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-4");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto4");
    var botonLiberar = document.getElementById("btn-liberar2-4");
    var botonReserva = document.getElementById("btn-reserva2-4");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2-5").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-5");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto5");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-5");
    var botonReserva = document.getElementById("btn-reserva2-5");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-5").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-5");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto5");
    var botonLiberar = document.getElementById("btn-liberar2-5");
    var botonReserva = document.getElementById("btn-reserva2-5");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});

document.getElementById("btn-reserva2-6").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-6");
    var zonas = document.getElementById("zona2");
    var puestos = document.getElementById("puesto6");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    var botonLiberar = document.getElementById("btn-liberar2-6");
    var botonReserva = document.getElementById("btn-reserva2-6");

    alert("Has elegido la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "red";
    puestoColor.style.color = "white";
    botonLiberar.style.display = "block";
    botonReserva.style.display = "none";
});

document.getElementById("btn-liberar2-6").addEventListener("click", function () {
    var puestoColor = document.getElementById("puestos2-6");
    var zonas = document.getElementById("zona");
    var puestos = document.getElementById("puesto6");
    var botonLiberar = document.getElementById("btn-liberar2-6");
    var botonReserva = document.getElementById("btn-reserva2-6");
    var contenidoZonas = zonas.innerHTML;
    var contenidoPuestos = puestos.innerHTML;
    
    alert("Has liberado la " + contenidoZonas + " y el " + contenidoPuestos);
    puestoColor.style.backgroundColor = "green";
    puestoColor.style.color = "white";
    botonReserva.style.display = "block";
    botonLiberar.style.display = "none";
    
});


function validar() {
    var input = document.getElementById('email');
    var ps = document.getElementById('password');
    if (input.value.trim() === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
    if (ps.value.trim() === '') {
        ps.classList.add('error');
      } else {
        ps.classList.remove('error');
      }
  }
  