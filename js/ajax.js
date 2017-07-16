var tasks = [];

var drawTasks = function() {
    $('#taskContainer').empty();

    if (tasks.length == 0) {
        $('#taskContainer').append("<tr><td>No hay tareas pendientes</td></tr>");
    } else {
        var contentToAdd = '';
        for (var i = 0; i < tasks.length; i++) {
            contentToAdd += '<tr><td class="task-item">' + tasks[i].name + '<button class="btareas" ' +
                'data-task-id="' + tasks[i].id + '">Eliminar</button></td></tr>'
        }
        $('#taskContainer').append(contentToAdd);
    }
}

var getTasks = function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/tasks", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            tasks = JSON.parse(XHR.responseText);
            drawTasks();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

var createTask = function (name) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/tasks", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            tasks.push(JSON.parse(XHR.responseText));
            drawTasks();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify({"name": name}));
}

var deleteTask = function (id) {
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/tasks/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            console.log("tasks deleted");
            getTasks();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}
var elemento = document.getElementById("newTaskName");
document.getElementById("sendNewTask").addEventListener("click", function (event) {
    if(elemento.value == "") {
        var XHR = new XMLHttpRequest();
        $("#errorAjax").show();
        XHR.abort();
    }

        else{
        $("#errorAjax").hide();
            event.preventDefault();
            createTask(document.getElementById("newTaskName").value);
        }


})


getTasks();

$(document).on('click', '.deleteTask', function(){
    var id = $(this).data('taskId');
    deleteTask(id);
});


