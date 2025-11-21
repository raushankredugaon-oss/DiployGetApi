const exp = require("express");
const app = exp();
app.use(exp.json());

let arr= [
    {
        "name":"Raushan",
        "age":19
    },
    {
        "name":"Aditya",
        "age":20
    }
]


app.get("/userNew",(userRequest,userresponse)=>{
    userresponse.json(arr);
})

app.post("/newuser",(userRequest,userresponse)=>{
    const newdata=userRequest.body;
    arr.push(newdata);
    userresponse.json(arr);
})


app.listen(3000,()=>{
    console.log("Server Running Successfully");
    
})