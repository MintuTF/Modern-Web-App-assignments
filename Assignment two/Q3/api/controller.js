const { send } = require("process");


module.exports.multiply=function(req,resp){

    const val1=req.query.val1;
    const val2=req.params.val2;

    console.log("val1: "+val1,"val2: " +val2)
    console.log(parseInt(val1)*parseInt(val2))
    resp.send("val1: "+val1+" * "+"val2: "+val2+ " = "+ parseInt(val1)*parseInt(val2) );
    resp.send();
    
}