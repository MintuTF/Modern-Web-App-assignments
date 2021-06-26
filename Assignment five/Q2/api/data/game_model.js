const mongoose =require("mongoose");

const publisherSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    location:{
        address:String,
        coordinates:{
            
            type:[Number], //logitude(E/W) and latitude(N/S)
            index:"2dsphere"
        }
        }

})

const gamesSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
  },
    price:Number,
    year:Number,
    minPlayer:{
        type:Number,
        min:1,
        max:10
    },
    maxPlayer:Number,
    minAge:{
        type:Number,
        min:4
    },
    rate:{
        type:Number,
        min:1,
        max:5,
        "default":1
    },
    designers:[String],
    publisher:[publisherSchema]
});


mongoose.model("Game",gamesSchema);