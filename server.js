var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname));
app.listen(process.env.PORT || 5000);