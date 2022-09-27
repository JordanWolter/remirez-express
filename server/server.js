const express = require('express');

const app = express();

//make ther server/public folder availible to all
app.use(express.static('./server/public'));

app.listen(3000, () => {
    console.log('We are live');
});

console.log('in server.js!');