import { createServer } from "http";
import * as fs from 'fs';

let server = createServer((request, response) => {
    
    //we just pipe everything for now. 
    // later here, manage the curl, the redirection pages etc
    response.writeHead(201, { 'content-type': 'text/html' });
    fs.readFile('.'+request.url, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('file not found .'+request.url);
        } else {
            response.write(data);
        }
        response.end();
    });

});
server.listen(8500); // start !
console.log("Serveur lancé.");