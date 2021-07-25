const express = require('express');

const mongoose = require('mongoose');


const todoHandler=require('./routeHandler/todoHandler')

const app = express();

app.use(express.json());

// database connection mongoose

mongoose.connect('mongodb://localhost/todo',
{
     useNewUrlParser: true,
     useUnifiedTopology: true 
     
    }
    )
 .then(()=>console.log('connection successfully'))
 .catch(err => console.log(err))   
    

app.use('/todo',todoHandler)

function errorHandler(err,req, res, next) {
    if(res.headerSent){
        return next(err)
    }
    res.status(500).json({error:err})
}

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
 