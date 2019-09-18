const  express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyparser.json());

var url = 'mongodb://localhost:27017/merntrack';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongooose connection estblished");
})

const usersRouter  = require('./routes/user') ;
const exerciseRouter = require('./routes/exercise');

app.use('/users',usersRouter);
app.use('/exercise',exerciseRouter);


app.listen(port,() => {
    console.log(`server running on port ${port}`);
});