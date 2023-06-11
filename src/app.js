const express = require(`express`);
const path = require(`path`);
const app = express();

//Puertos y enlaces
const port = 3030;
const publicPath = path.resolve(__dirname, `../public`);
const indexPath = path.resolve(__dirname, `./views/index.html`);

//Definición de métodos
app.get(`/`, (req, res) => res.sendFile(indexPath));
app.use(express.static(publicPath));
app.listen(port, () => console.log(`Server Done`));