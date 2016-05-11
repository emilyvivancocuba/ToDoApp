function getInputValue() {
    var textarea = document.getElementById('textarea').value;
    return textarea;
}
function doTarea(task) {
    var lista_tareas = document.getElementById('lista_tareas');
    
    //Crear el elemtento
    var this_tarea = document.createElement('div');
    this_tarea.className = 'added';
    

    var parrafo=document.createElement('p');

    var checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.className='checkbox';
    checkbox.onchange=function(){
        if (checkbox.checked) {
            parrafo.classList.add('tachado');
        }else{
            parrafo.classList.remove('tachado');
        }
    }

    var icono=document.createElement('span');
    icono.setAttribute("class","fa fa-trash");
    icono.onclick=function(){
        lista_tareas.removeChild(this_tarea);
    }

    //Agregar elementos a lista_tareas
    parrafo.innerHTML = task;
    lista_tareas.appendChild(this_tarea);
    this_tarea.appendChild(parrafo);
    parrafo.appendChild(icono);
    parrafo.appendChild(checkbox);
}
function clean () {
     var textarea = document.getElementById('textarea');
     textarea.value = '';
     textarea.focus();
}
function tasks() {
    var textareaValue = getInputValue();
    if (textareaValue !== ''){
        doTarea(textareaValue);
        clean();
    }
}