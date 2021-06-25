
//compile the model 
const mongoose =require("mongoose");


const courseList=new mongoose.Schema({
    courseId:{
        type:String,
        require:true
    },
    courseName:{
        type:String,
        require:true
    }
})

const schoolSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    grade:{
        type:Number
        
        },
        course:[courseList]

        

})


mongoose.model("students",schoolSchema);

// games collections

//mongoose.model("Game",gamesSchema,"games");