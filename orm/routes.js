const model=require('./model')
const route=require("express").Router();



route.get("/author",function(request,response){
    model.author.findAll(
        {include:[model.books]}
      ).then(function(data){
          response.json(data);
      }).catch(function(err){
          response.render([]);
      })
})


route.post("/author",function(request,response){
var auth={author_id:request.body.author_id,
          author_name:request.body.author_name,
          books:request.body.books}
          console.log(auth);
    model.author.create(auth,{include: [model.books]}).then(
        ()=>response.send("successfully uploaded")
    ).catch(
        ()=>response.sendStatus(500)
    );
})

module.exports = route