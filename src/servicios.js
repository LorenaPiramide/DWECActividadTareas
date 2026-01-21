import { URL_SERVER } from "./constantes.js";

export function get(ruta, callback, callbackError) {
    fetch(`${URL_SERVER}${ruta}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then(data()) // FIXME: Arreglar
    .catch();
        callbackError(console.error())
}

export function post(ruta, body, callback, callbackError) {

}

export function del() {

}

export function put() {
    
}