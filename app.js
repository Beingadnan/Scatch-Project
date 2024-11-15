const express=require('express');
const app= express();
app.use(express());

app.get('/',(req,res)=>{
    console.log("Adnan")
})
app.listen(8000,()=>{
    console.log("Server is running at",8000)
})