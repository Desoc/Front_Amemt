const categorias = ['Herramienta/accsesorio', 'Planta de verano', 'Planta de invierno', 'Planta de interior', 'Planta 4 estaciones'];
const categoriasEdit = ['Herramienta/accsesorio', 'Planta de verano', 'Planta de invierno', 'Planta de interior', 'Planta 4 estaciones'];
const inputCatgdEl = document.getElementById('categoria');
const inputCatgdElEdit = document.getElementById('categoriasss');
const tableEl = document.getElementById("table");

fillCategorias();
fillCategoriasEdit();

/* Por cada uno de los productos crea un elemento <option> que finalmente agrega al <select> */
function fillCategorias() {
  categorias.forEach(function (categorias, index, categorias) {
    const optionEl = document.createElement('option');
    optionEl.value = categorias[index];
    optionEl.innerText = categorias[index];
    inputCatgdEl.appendChild(optionEl)
  })
}

/* Por cada uno de los productos crea un elemento <option> que finalmente agrega al <select> */
function fillCategoriasEdit() {
  categoriasEdit.forEach(function (categoriasEdit, index, categoriasEdit) {
    const optionElEdit = document.createElement('option');
    optionElEdit.value = categoriasEdit[index];
    optionElEdit.innerText = categoriasEdit[index];
    inputCatgdElEdit.appendChild(optionElEdit)
  })
}

/* Funcion que genera thead por las claves de los datos Staticos */
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  data.forEach(key => {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  });
  // Creamos la celda editar
  let columnaEditar = document.createElement("th");
  columnaEditar.innerHTML = "Editar/Eliminar";
  row.appendChild(columnaEditar);
  thead.appendChild(row);
  // Creamos la celda eliminar
}

/* Funcion que genera tbody por las keys de los datos Staticos */
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }

    
    const btnEdit = document.createElement("td"); //agrega btn editar y su handler
    btnEdit.innerHTML = "<i class= 'fas fa-edit' style='font-size:25px'></i>";//Icono de font awesome
    btnEdit.setAttribute("data-toggle","modal");// Se agrega el atributo para mostrar el modal
    btnEdit.setAttribute("data-target","#ModalEditar");// Se agrega el atributo para que fije el modal especifico
    btnEdit.classList.add("btns");// Se agrega la clase del boton
    btnEdit.classList.add("btn-outline-info");// Se agrega la clase del boton
    row.appendChild(btnEdit);// Se inserta en la row

    btnEdit.onclick = function () {
        editItem(row);// Al clickear se llama a la funcion para editar la row
    };                // se le pasa la row

    
    const btnDelete = document.createElement("td"); //agrega btn borrar y su handler
    btnDelete.innerHTML = "<i class= 'fas fa-trash-alt' style='font-size:25px'></i>";//Icono de font awesome
    btnDelete.setAttribute("data-toggle","modal");// Se agrega el atributo para mostrar el modal
    btnDelete.setAttribute("data-target","#ModalEliminar");// Se agrega el atributo para que fije el modal especifico
    btnDelete.classList.add("btns");// Se agrega la clase del boton
    btnDelete.classList.add("btn-outline-danger");// Se agrega la clase del boton
    row.appendChild(btnDelete);// Se inserta en la row

    btnDelete.onclick = function () {
      deleteItem(row.rowIndex);// Al clickear se llama a la funcion para eliminar la row
    };                         // se le pasa el indice de la row
    
  }
}

/* Funcion para eliminar rows de la tabla */
function deleteItem(index) {

  const elimn = document.getElementById("buttondelete");

  elimn.onclick = function () {
    let Spinner = document.getElementById("boton-deleted");
    Spinner.classList.add("visible");
    
    setTimeout(() => {
      let data = Object.keys(datos[0]);
      data.splice(index, 1);
      tableEl.deleteRow(index);
      let Spinner = document.getElementById("boton-deleted").classList.remove("visible");
    }, 2000);

  };
}

/* Funcion para editar row de la tabla */
function editItem(row) {
  
  nombreEditar = document.getElementById("nombreEditar");
  categoriaEditar = document.getElementById("categoriasss");
  preciosEditar = document.getElementById("preciosEditar");
  /* Se toman los valores de las row y se insertan en las variables Editar
     una vez modificado los valores se hace click para guardar los cambios
     y los valores guardados en las variables Editar se insertan en las rows.
  */

  nombreEditar.value = row.cells[0].innerHTML;

  categoriaEditar.value = row.cells[1].innerHTML;

  preciosEditar.value = row.cells[2].innerHTML;

  const modificar = document.getElementById("modif");
  modificar.onclick = function () {
    let Spinner = document.getElementById("boton-edit");
    Spinner.classList.add("visible");
    
    setTimeout(() => {
      row.cells[0].innerHTML = nombreEditar.value;
      row.cells[1].innerHTML = categoriasss.value;
      row.cells[2].innerHTML = preciosEditar.value;
      let Spinner = document.getElementById("boton-edit").classList.remove("visible");
    }, 2000);

  }
}


/* Muestra el Spinner al ingresar un nuevo dato en la tabla */
let spinner = () => {

  const Spinner = document.getElementById("boton-cargar");
  Spinner.classList.add("visible");

  setTimeout(insertarDato, 2000);

}


/* funcion que inserta el dato nuevo en la tabla */
let insertarDato = () => {
  
  nombre = document.getElementById("nombre");
  categoria = document.getElementById("categoria");
  precios = document.getElementById("precio");
  

    let nuevaRow = document.createElement("tr"); 
 
    let nuevaCell = document.createElement("td");
    nuevaCell.innerHTML = nombre.value;
 
    let nuevaCell2 = document.createElement("td");
    nuevaCell2.innerHTML = categoria.value;
 
    let nuevaCell3 = document.createElement("td");
    nuevaCell3.innerHTML = precios.value

    // celda con boton de editar
    let botonEditar = document.createElement("td");
    botonEditar.innerHTML = "<i class= 'fas fa-edit' style='font-size:25px'></i>";//Icono de font awesome
    botonEditar.setAttribute("data-toggle","modal");// Se agrega el atributo para mostrar el modal
    botonEditar.setAttribute("data-target","#ModalEditar");// Se agrega el atributo para que fije el modal especifico
    botonEditar.classList.add("btns");// Se agrega la clase del boton
    botonEditar.classList.add("btn-outline-info");// Se agrega la clase del boton
    botonEditar.onclick = function () {
      console.log("Editar");
      editItem(nuevaRow);// Al clickear se llama a la funcion para editar la row
    };                   // se le pasa la row


    let botonEliminar = document.createElement("td");
    botonEliminar.innerHTML = "<i class= 'fas fa-trash-alt' style='font-size:25px'></i>";//Icono de font awesome
    botonEliminar.setAttribute("data-toggle","modal");// Se agrega el atributo para mostrar el modal
    botonEliminar.setAttribute("data-target","#ModalEliminar");// Se agrega el atributo para que fije el modal especifico
    botonEliminar.classList.add("btns");// Se agrega la clase del boton
    botonEliminar.classList.add("btn-outline-danger");// Se agrega la clase del boton
    botonEliminar.addEventListener("click", () => {
      deleteItem(nuevaRow.rowIndex);// Al clickear se llama a la funcion para eliminar la row
    });                             // se le pasa el indice de la row
  
   tbdy = document.querySelector("tbody");

   tbdy.appendChild(nuevaRow)// Se inserta la row en el tbody
   nuevaRow.appendChild(nuevaCell)
   nuevaRow.appendChild(nuevaCell2)
   nuevaRow.appendChild(nuevaCell3)
   nuevaRow.appendChild(botonEditar)
   nuevaRow.appendChild(botonEliminar)
 
    const barraSpinner = document.getElementById("boton-cargar").classList.remove("visible");
}

/* Boton agregar personaje / SPINNER */
const agregar = document.getElementById("agregar");
agregar.addEventListener("click" , spinner);

/* Datos Staticos */
let datos = [
  { Nombre: "Camelia japónica", Categoria: 'Planta de invierno', Precio: "1250" },
  { Nombre: "Potus", Categoria: 'Planta de interior', Precio: "1000" },
  { Nombre: "Surfinia", Categoria: 'Planta de verano', Precio: "1630" },
  { Nombre: "Clavel", Categoria: 'Planta de invierno', Precio: "2500" },
  { Nombre: "Limonero 4 estaciones", Categoria: 'Planta 4 estaciones', Precio: "3590" },
  { Nombre: "Cultivador de mano", Categoria: 'Herramienta/accsesorio', Precio: "900" },
  { Nombre: "Tenedor de jardín", Categoria: 'Herramienta/accsesorio', Precio: "1100" }
];


/* Al cargar la pagina muestra genera la tabla con los datos Staticos */
window.addEventListener("load", () => {
  let table = document.querySelector("table");
  let data = Object.keys(datos[0]);
  generateTable(table, datos); // genera el tbody
  generateTableHead(table, data); // genera el thead
});



/* Funcion de filtrado */
function filterTable() {
  // Variables
  let dropdown, table, rows, cells, product, filter;

  dropdown = document.getElementById("filtroTipo");
  table = document.querySelector("tbody");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Recorre las filas y oculta aquellas con categorias que no coinciden con el filtro.
  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    product = cells[1] || null;
    
    if (filter === "All" || !product || (filter === product.textContent)) {
      row.style.display = "";
    }
    else {
      row.style.display = "none"; // oculta esta fila
    }
  }
  Reset();
}

/* Funcion que al sacar el filtro muestra la tabla completa */
function Reset() {
  var dropDown = document.getElementById("filtroTipo");
  dropDown.selectedIndex = 0;
}

const filtroEl = document.getElementById('filtroTipo');
const switchDropdown = document.getElementById('switch');

/* Listener que cuando el switch saca el "hidden" 
   llama a la funcion filterTable() */
switchDropdown.addEventListener("click", () => {
  filterTable(); 
  filtroEl.classList.toggle('hidden');
});



