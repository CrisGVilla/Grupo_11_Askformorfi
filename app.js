//require el modulo express y lo guarda en una constante
const express = require('express');
//guarda las funcionalidades de los objetos en una constante llamada app
const app = express();
// requiere el modulo path de Node, para que nos de la ruta absoluta
const path = require('path');
// guarda en una constante y utiliza la funcion resolve para devolver la ruta absoluta
const publicPath = path.resolve('public');
// usa la funcion use de express y la pasamos la constante con la ruta absoluta
app.use(express.static(publicPath));
//levantamos el seridor en el puerto 3000
app.listen(3000, () =>{

    console.log('Servidor corriendo');

});

//#region 
//#endregion

// usamos la funcion get para solicitar datos, la funcion recibe un parametro que es la ruta del archivo y una function arrow, que esta recibe
//req solicitud , res respuesta, luego usamos res con la funcion senfile para enviar una respuesta a la peticion de dicha ruta por el cliente
app.get('/',(req,res) => {

    res.sendFile(path.resolve(__dirname, './views/index.html'));
});