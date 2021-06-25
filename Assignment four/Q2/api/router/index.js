
const express=require("express");
const studentsController=require("../controller/schoolController");
const router=express.Router();

router.get("/students",studentsController.getAllStudents);

router.get("/students/:id",studentsController.getOneStudent)

module.exports=router;