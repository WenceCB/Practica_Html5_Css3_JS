/**
 * Created by Wence on 16/7/17.
 */

var script = document.body.children;
function navegador()
{
    console.log("he entrado");
    if (navigator.userAgent.match(/Trident\/7\./)){
        console.log("internet 11");
    }
    else{
        console.log("no");

        // script.removeChild(script.length-1);
        // script.remove(script[script.length-1]);
        var eliminar = script[script.length-1];
        console.log(eliminar);

    }
}