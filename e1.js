const express = require("express");
const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send('Ejercicios Express')
})
app.listen(3000, ()=>{
    console.log("Servidor levantado en el puerto" + PORT); 
})