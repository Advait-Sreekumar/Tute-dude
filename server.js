const http=require("http");  //Importing http
const fs = require("fs");   //importing fs to import files rather than writing html in node ile

const server=http.createServer((req,res)=>{     //creation of server
    
    const {method,url}=req;             //storing values of method and url

    if(url==='/home'){
        fs.readFile('./home.html', (err, data) => {   //to check if the file is created or not and handling the error
            if(err){        //error handling
                res.writeHead(500); //Internal Server Error
                res.write("<h1>Error in loading page</h1>");
                res.end();
            }
            else{
                res.writeHead(200,{"Content-type":"text/html"}); //200 OK response
                res.write(data);        //showing the page
                res.end();
            }
        });
    }
    else if(url==='/about'){
        fs.readFile('./about.html', (err, data) => {
            if(err){
                res.writeHead(500);
                res.write("<h1>Error in loading page</h1>");
                res.end();
            }
            else{
                res.writeHead(200,{"Content-type":"text/html"});
                res.write(data);
                res.end();
            }
        });
    }
    else if(url==='/contact'){
        fs.readFile('./contact.html', (err, data) => {
            if(err){
                res.writeHead(500);
                res.write("<h1>Error in loading page</h1>");
                res.end();
            }
            else{
                res.writeHead(200,{"Content-type":"text/html"});
                res.write(data);
                res.end();
            }
        });
    }
    else{
        res.writeHead(404);         //in case of url not found
        res.write(`<h1>Sorry page does not exist</h1>`);
        res.end();
    }
})

const PORT= 4000;

server.listen(PORT,()=>{        //starting server at a specefic port
    console.log(`Server started at http://localhost:${PORT}`);
})