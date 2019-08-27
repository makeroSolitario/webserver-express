

const http  = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application/json'});

    let salida  ={
      nombre: 'Miguel',
      edad: 50,
      url: req.url
    }

    res.write(JSON.stringify(salida));
})
.listen(8080);
console.log('Escuchando el puerto 8080');
