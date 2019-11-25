const express=require('express')
const app=express()
// function uzzu(req,res){
//     res.send('hello world')

app.get('/api/timestamp/:date_string?',(req,res)=>{
    let c=req.params.date_string
    let k
    if(isNaN(c)){
    k=new Date(c)
    }
    else{
        k=new Date(parseInt(c)*1000)
    }
    let dic={}
    dic.unix=k.getTime()
    dic.utc=k.toUTCString()
    res.send(JSON.stringify(dic))
})
app.listen(process.env.PORT,()=>(console.log("server started")))