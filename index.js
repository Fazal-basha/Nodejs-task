const express=require("express")
const app  = express()
const path =require("path")
const authapi= require('./orm/routes')

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); 

app.use("/authapi",authapi)


app.get("/home",function(request,response){ 
    response.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/",function(request,response){
     response.send("Hello!!! Node js is running...")
})

app.listen("1718",function(){
    console.log("server started in port number 1718")
})
