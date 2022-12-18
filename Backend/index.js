import express from 'express';
import Database from 'nedb';
import cors from 'cors';

const PORT = 8000;

///DATABASE///
function get_event_data(id){
    db = new Database({ filename : 'events/'+id});
    db.loadDatabase();
    return db.getAllData();
}
//ACCOUNTS//
    let db = {}
    const db_accounts = new Database({ filename : "accounts"});
    db_accounts.loadDatabase();

    //Core API
    const app = express();
    app.use(express.json());


    // load db_accounts.find({ username: req.body.username, password: req.body.password },function (err, docs) 
    
    //API initialisation
    app.use(cors());
    app.post("/api/accounts/inscription", (req, res) => {
        db_accounts.loadDatabase();
        db_accounts.find({ username: req.body.username },
            function (err, docs) 
            {
                if(err)
                {
                    console.log(err);
                };
                if(docs[0]==null) //docs == [] doesn't work....
                {
                    db_accounts.insert(req.body,
                        function(err,newDoc)
                        {
                            if(err)
                            {
                                console.log(err);
                            };
                            res.send(newDoc._id);
                        })
                }else
                {
                    res.send("ERREUR_DOUBLE");
                }
            })
        
        
    });
    app.post("/api/events", (req, res) => {
        console.log(req.body,JSON.stringify(req.body),db_accounts.getAllData());
        db_accounts.insert(req.body,(err) =>(console.log(err)));
        res.send(req.body);
    });

    app.post("/api/accounts/connection", (req, res) => {
        db_accounts.loadDatabase();
        db_accounts.find({ username: req.body.username },
            function (err, docs) 
            {
                if(err)
                {
                    console.log(err);
                };
                if(docs[0]==null) //docs == [] doesn't work....
                {
                    res.send("ERREUR_CONNECTION");
                }else
                {
                    res.send(docs[0]._id);
                }
            })
    });
    app.listen(PORT, () => {
        console.log(`Server launch on port : ${PORT}`)
    })
