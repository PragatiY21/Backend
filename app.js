const express =require("express");
const app =express();

app.get('/',function(req,res){

    res.send("welcome");
})

app.get('/about', (req,res)=>{

    res.send("welcomin about page")
})

app.listen(3000,()=>{console.log("listen from port 3000")});


// var fs =require('fs');
// var os=require('os');

// var user =os.userInfo();
// console.log(user);


// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John


// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(jsonStringified); // Output: {"name": "Alice", "age":25}