const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
const products = [
    {
        id:1,
        nombre:'Taza de Harry Potter',
        precio:300,
    },
    {
        id:2,
        nombre: 'FIFA 23 PS5',
        precio:1000,
    },
    {
        id:3,
        nombre:'Figura Goku Super Saiyan',
        precio:100,
    },
    {
        id:4,
        nombre:'Zelda Breath of the wild',
        precio:200,
    },
    {
        id:5,
        nombre:'Skin Valorant',
        precio:120,
    },
    {
        id:6,
        nombre:'Taza de Star Wars',
        precio:220,
    },
];
app.get("/products",(req,res)=>{
    res.send(products)
})
app.post("/createproduct",(req,res)=>{
    const newProduct = {
        id: products.lenght +1,
        nombre:req.body.nombre,
        precio:req.body.precio,
    }
    products.push(newProduct)
    res.send(products)
})
app.put("/actualizarProduct/id/:id",(req,res)=>{
    products.forEach(product =>{
        if(product.id == req.params.id){
            product.nombre = req.body.nombre
            product.precio = req.body.precio
        }
    })
    res.send(products)
})
app.delete("/deleteProduct/id/:id",(req,res)=>{
    res.send(products.filter(product=>product.id != req.params.id))
})
app.get("/productFilter",(req,res)=>{
    res.send(data.items.filter((product)=>product.precio>=parseInt(req.query.precio)))
})

app.get("/productDefaultPriceFilter", (req, res) => {
    res.send(data.items.filter((product) => product.precio >= 50 && product.precio <= 250));
  });
app.get("/product/id/:id", (req, res) => {
    data.items[req.params.id - 1] ? res.send(data.items[req.params.id - 1]) : res.send({ message: "OK" });
  });
app.listen(8000, ()=>{
    console.log("Servidor levantado en el puerto" + PORT); 
})