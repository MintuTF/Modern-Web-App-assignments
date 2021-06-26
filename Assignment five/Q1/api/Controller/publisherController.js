

const { ObjectID } = require("bson");
const mongoose=require("mongoose")

const Game=mongoose.model("Game");
const getGameController=require("../Controller/gameController");



// get all publisher
function publisherGetAll(req,resp){

    Game.findById(req.params.id).select("publisher").exec(function(err,result){

      const response ={
        status:200,
        massage:result
      }
if(err){
  response.status=500;
response.massage=err;
} 
else if(!result){
response.status=400;
response.massage={"error": "can not find your request in the database"}
}

        resp.status(response.status).json(response.massage);
    })
}


// get one publisher function
function publisherGetone(req,resp){
  
  const gameId=req.params.id;
  const publisherId=req.params.publisherId;
    Game.findById(gameId).select("publisher").
        exec(function(err,result){
         // find({_id:ObjectID(req.params.publisherId)})
         const publisher=result.publisher.id(publisherId);

      
            const response={
              status:200,
              massage:publisher
            } 
             
            if(err){
              response.status=500;
              response.massage=err;
              
            } else if(!publisher){
            
              response.status=400;
              response.massage={"massage":"publishe id not found"};
            
            
            }
             
            resp.status(response.status).json(response.massage);
            console.log()
          });
          

      
}

function publisherAddOne(req,resp){

  const reqBody=req.body;

  const newPublisher={
    name:reqBody.name,
    location:{
      address:reqBody.address,
      coordinates:[reqBody.lang,reqBody.lat]

      
    }

  }

  Game.findById(req.params.id).exec(function(err,result){
    const response={
       status:200,
       massage:result
     }
      
     if(err){
       response.status=500;
       response.massage=err;
       console.log(err)
     } else if(!result){

       response.status=400;
       response.massage={"massage":"Game id not found"};

     
     }
      console.log(response)
       resp.status(response.status).json(response.massage);
      // return response;
     
   })


  // call one publisher  


  
  // console.log(getGameController.gameGetOne(req,resp));



}





// edit this part


// function publisherGetone(req,resp){
//     Game.findById(req.params.id).select("publisher").find({_id:ObjectID(req.params.publisherId)}).
//         exec(function(err,result){
//           const response={
//             status:200,
//             massage:result
//           }
           
//           if(err){
//             response.status=500;
//             response.massage=err;
            
//           } else if(!result){
          
//             response.status=400;
//             response.massage={"massage":"publishe id not found"};
          
          
//           }
//            if(result){
//                result.publisher.name=req.body.name;
//                result.save(function(err,updatePublisher){
//                    if (err){
//                        result.status(500).json(err)
//                    }
//                    else{
//                     resp.status(response.status).json(updatePublisher);
//                    }
//                })
//            }
//         //  resp.status(response.status).json(response.massage);
//       })
// }




module.exports={   
    publisherGetAll:publisherGetAll,
    publisherGetone:publisherGetone,
    publisherAddOne:publisherAddOne
}