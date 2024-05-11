const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/learn")
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
//useCreateIndex : true, useFindAndModify: true,  useNewUrlParser: true,{ useUnifiedTopology:true}