// Inicializar tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//evento click para alerta enviar por correo
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("el correo fue enviado correctamente...")
    })
})
//cambio de color titulos, ingredientes y preparacion
$('#ingredientes, #preparacion').dblclick(function(){
    $(this).css('color', 'red');
})
//seccion recetas relacionadas
$(document).ready(function(){
    $(".card-title").click(function(){
        $(this).next(".card-content").toggle();
    })
})