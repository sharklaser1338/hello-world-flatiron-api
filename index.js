var flatiron  = require('flatiron')
  , app       = flatiron.app
  ;

app.use(flatiron.plugins.http, 
{ "before" : [ require('./middleware/uuid') ]
, "onError": function not_found(err) {
    this.res.json(404, { "error": "not_found" });
  }
});

var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
    sys.puts("I got kicked");  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hallo Hannes, Hallo Ben");  
    response.end();  
}).listen(8080);  
sys.puts("Server Running on 8080");

app.start(3000, function () { console.log({"flatiron": "ok"}); });