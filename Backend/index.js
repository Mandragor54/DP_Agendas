import express from 'express';
import Database from 'nedb';
import cors from 'cors';

const PORT = 8000;

///DATABASE///

//ACCOUNTS//
    const db_accounts = new Database({ filename : "accounts"});
    db_accounts.loadDatabase();

    //Core API
    const app = express();
    app.use(express.json());

    //API initialisation
    app.use(cors());
    app.post("/api/accounts", (req, res) => {
        console.log(req.body,JSON.stringify(req.body),db_accounts.getAllData());
        db_accounts.insert(req.body,(err) =>(console.log(err)));
        res.send(req.body);
    });

    app.listen(PORT, () => {
        console.log(`Server launch on port : ${PORT}`)
    })
