const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("Mensaje bienvenida")
})
app.get("/Productos",(req,res)=>{
    res.send("Crear un producto")
})
app.put("/Productos",(req,res)=>{
    res.send("Actualizar un producto")
})
app.delete("/Productos",(req,res)=>{
    res.send("Borrar un producto")
})
app.get("/usuarios",(req,res)=>{
    res.send("Listado de usuarios")
})
app.post("/usuarios",(req,res)=>{
    res.send("Crear un usuario")
})
app.put("/usuarios",(req,res)=>{
    res.send("Actualizar un usuario")
})
app.delete("/usuarios"(req,res)=>{
    res.send("Borrar un usuario")
})

/* No entiendo bien el funcionamiento de POSTMAN */
app.listen(5000, ()=>{
    console.log("Servidor levantado en el puerto" + PORT); 
})
/* Preguntar si para levantar otro servidor en el mismo proyecto tiene que ser en otra terminal  */