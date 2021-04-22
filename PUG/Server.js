const express = require("express");
const pug = require("pug");
const prodRoutes = require("./routes/ProductRoutes");
const frontRoutes = require("./routes/FrontRoutes");

const PORT = 8080;  
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', frontRoutes);
app.use('/api/productos', prodRoutes);

app.set("views", "./views");
app.set("view engine", "pug");

// Conexion a server con callback avisando de conexion exitosa
const server = app.listen(PORT, () => { console.log(`Ya me conecte al puerto ${PORT}.`) });
server.on('error', (error) => console.log('Hubo un error inicializando el servidor.'));