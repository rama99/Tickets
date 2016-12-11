const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

const tickets = require('./routes/tickets');
const index = require('./routes/index');

//-- set view engine
app.set('view engine', 'ejs');

//-- set views folder
app.set('views' , path.join(__dirname , 'views'));
app.engine('html' , require('ejs').renderFile);

//-- static files folder
app.use(express.static(path.join(__dirname , 'client')));

//-- body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//-- set routes
app.use('/' , index);
app.use('/tickets' , tickets);


//-- for 404 display
app.use( function(req , res , next) {   
    res.send('404 ');
})

//-- error middleware
app.use( function(err , req , res , next) {   
    res.send(err.message);
})

app.listen(5000, () => {
    console.log('Server started at port 5000');
})