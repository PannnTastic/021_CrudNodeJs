import express from "express";
import bodyParser from "body-parser";
import mobil from "./routes/mobil.js";
import user from "./routes/user.js";

const app = express();
const port = 8080;

app.get('/',function(req,res){
    console.log(['GET ROUTE'])
    res.send('Hello Pannn')
});

app.use(bodyParser.json());
app.use("/mobil",mobil);
app.use('/user',user);
app.listen(port, () => console.log(`Server Berjalan di Port : http://localhost:${port}`));