let express = require('express');
let app = express();

let homeAdData = require('./home/ad');
app.get('/api/homead', (req, res) => {
    "use strict";
    res.send(homeAdData);
    next();
});

let homeListData = require('./home/list');
app.get('/api/homelist/:city/:page', (req, res) => {
    "use strict";
    console.log('当前城市:' + req.params.city);
    console.log('当前页数' + req.params.page);

    res.send(homeListData);
    next();
});

let server = app.listen(3000, () => {
    "use strict";
    let host = server.address().address;
    let port = server.address().port;

    console.log(`服务器已经启动在` + host + port);
});