const express = require('express');
const app = express();
app.use(express.static('kensag/'));
app.listen(6000), function(){
    console.log('Server listening at 6000')
}