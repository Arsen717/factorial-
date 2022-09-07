const express = require('express');
const app = express();
app.use(express.static('factorial/'));
app.listen(5000), function(factorial){
    console.log('Server listening at 5000')
}