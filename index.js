const express = require('express');
const mongoose = require('mongoose');



//connect to mongoDB
mongoose.connect("mongodb+srv://user:Prp@12]@cluster0.usk10.mongodb.net/stude?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        
     
        app.listen(3000,()=>{
            console.log("server started!!!...");
        })
    }
);
	