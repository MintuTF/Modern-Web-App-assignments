const dbconnection = require("../data/dbconnection");

module.exports.getAllGame=function(req,resp){

    const collections=dbconnection.get().collection("games");
    let count =4;

    if(req.query.count&& req.query){
        count=parseInt(req.query.count);
    }

    if(count>8)
    {
        count=8;
    }
    collections.find().limit(count).toArray(function(err,data){

        console.log(data)
       resp.json(data) ;
    })
}