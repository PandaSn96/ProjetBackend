const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connection = mongoose.connection;

var api = express.Router();

require('dotenv').config();
//middlewares


//routes

const annonceRoutes = require('./routers/annonce')
const candidatureRoutes = require('./routers/candidature')
const userRoutes = require('./routers/user')
const authRoutes = require('./routers/auth')


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use('/api',annonceRoutes);
app.use('/api',candidatureRoutes);
app.use('/api',authRoutes);


//const port = process.env.PORT || 9090;

mongoose.connect('mongodb://localhost:27017/bdlabo6',{
useUnifiedTopology: true, useNewUrlParser: true } );

connection.once('open',()=>{
    console.log('Connected to MongoDB');
} );

app.listen(3115,()=>{
    console.log("j'ecoute le port 3115");
});

//app.listen(port,()=>{
    //console.log('Server live at port : ' + port);
//})


//mongoose.connect(process.env.DATABASE,  {

//}).then(()=>console.log('Connected to the database'));

