import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.get('/',function(req,res){
    res.send('Hello Pannn')
})

app.use(bodyParser.json());
app.listen(port, () => console.log(`Server Berjalan di Port : http://localhost:${port}`));