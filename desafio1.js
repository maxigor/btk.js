var http = require('http'),
    url = require('url'),
    fs = require('fs');

var server = http.createServer(function(request, response){

   fs.readFile(__dirname , function(erro, html){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(html);
      responde.end();
   });
});

server.listen(3000, function(){
   console.log("Why the sun is so loud?");
});



/*

 1) Utilize o retorno da função url.parse() para capturar o pathname digitado e renderizar o HTML correspondente. Se o pathname estiver vazio, signica que deve renderizar a página de artigos, e se estiver com um valor diferente do nome dos arquivos HTML, renderize a página de erros.

 2) Você também pode inserir conteúdo HTML na função response.end(html), economizando linha de código ao não uti- lizar a função response.write(html).

 3) Utilize a função fs.existsSync(html) para vericar se existe o HTML com o mesmo nome do pathname digitado.

*/
