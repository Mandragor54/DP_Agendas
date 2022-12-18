import express from 'express';
import Database from 'nedb';
import cors from 'cors';

const PORT = 8000;

//Database
const db = new Database({ filename : "accounts"});
db.loadDatabase();

//Core API
const app = express();
app.use(express.json());

//API initialisation
app.use(cors());
<<<<<<< Updated upstream
app.post("api/accounts", (req, res) => {
    console.log(req.body);
=======
app.post("/api/accounts", (req, res) => {
    console.log(req.body);
    db.insert(JSON.stringify(req.body));
    res.send(req.body);
>>>>>>> Stashed changes
});

app.listen(PORT, () => {
    console.log(`Server launch on port : ${PORT}`)
})
