// Comprueba si el campo tiene contenido o está vacío
function checkContenido (x) {
  var contenido = x.length !== 0 ? true : false;
  return contenido;
}

// Eliminar fila de la tabla y oculta la tabla en caso de no tener datos
function eliminarFila(x) {
  var r = confirm("¿Eliminar fila?");
  if(r) {
    $(x).parent().parent().remove();
    var rowCount = $('#tablaContenido tr').length;
    if(rowCount === 1) {
      $('#tablaContenido').hide();
    }
  }
}

// Se inicializa el dialog
$("#dialog").dialog({
  autoOpen: false,
  resizable: false,
  draggable: true,
  position: {
    my: "right top",
    at: "right-50 top+50"
  },
  show: {
    effect: "blind"
  },
  hide: {
    duration: 1000
  },
  close: function( event, ui ) {$("#dialog").find("input[type=text], textarea").val("");} // Vacía los campos del dialog
});

// Se abre el dialog al hacer click en el opener
$("#opener").click(function () {
  $("#dialog").dialog("open");
});

// Se añade una nueva fila a la tabla con los datos del dialog al hacer click en guardar
$('#guardar').on('click', function () {
  var title = $('#title').val();
  var description = $('#description').val();

  if (checkContenido(title)) {
    $('#tablaContenido > tbody:last-child')
    .append(
      "<tr>"+
      "<td class='editable' contentEditable='true'>"+title+"</td>"+
      "<td class='description'>"+description+"</td>"+
      "<td><span class='ui-icon ui-icon-trash cancel' onclick='eliminarFila(this)'></span></td>"+
      "</tr>"
    );

    $( "#tablaContenido" ).show();
  } else {
    alert("Se requiere campo title.")
  }
});
