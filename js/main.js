function getInputValue() {
    var textarea = document.getElementById('textarea');
    return textarea.value;
}
function doTarea(task) {
    var lista_tareas = document.getElementById('lista_tareas');
    
    //Crear el elemtento
    var elemento = document.createElement('div');
    elemento.className = 'added';
    elemento.innerHTML = task;

    //Agregar elementos a lista_tareas
    lista_tareas.appendChild(elemento);

    var deleteIcon = createIcon();
    elemento.appendChild(deleteIcon);
}
function clean () {
     var textarea = document.getElementById('textarea');
     textarea.value = '';
     textarea.focus();
}
function createIcon(){
    var icono=document.createElement('input');
    icono.type="button";
    icono.style.marginTop="4px";
    icono.style.float="right";
    icono.value='<>';
    icono.classList.add("removeTodo", "btn", "btn-danger");
    icono.onclick=function(){ 
        var toDelete = document.querySelector('.added');
        toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    return icono;
}
function tasks() {
    var textareaValue = getInputValue();
    if (textareaValue !== ''){
        doTarea(textareaValue);
        clean();
    }
}