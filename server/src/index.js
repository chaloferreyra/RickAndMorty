const http = require('http');

const PORT = 3001;

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    
    const url = req.url.split('/');

    const ruta1 = url[1];
    const ruta2 = url[2];
    const id = url[3];

    console.log(url[1],'/',url[2]);
    if(ruta1 === 'rickandmorty' && ruta2 === 'character'){
        
    }
    
    
    
    
    
    
    
    
    
    
    res.end("llegamos")
}).listen(PORT, ()=>{
    console.log(`listening on port http://localhost:${PORT}`);
});