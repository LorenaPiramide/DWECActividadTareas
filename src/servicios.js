import { URL_SERVER } from "./constantes.js";

export function get(ruta, callback, callbackError) {
    fetch(`${URL_SERVER}${ruta}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then(data => {
        callback(data);
    }).catch(error => {
        console.error(error);
        callbackError(error);
    });
    // .then(data=>callback(){
    //     .catch();
    //     callbackError(console.error())
    // }) // FIXME: Arreglar
    
}

export function post(ruta, body, callback, callbackError) {

}

export function del() {

}

export function put() {

}