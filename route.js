const express = require('express');
const Student = require('./model/student');
const router = express.Router();

//get
router.get("/students",async (req,res)=>{

    const student = await Student.find();
    res.send(student);
});

//post
router.post("/students",async(req,res)=>{
    try{
        const student = new Student({
            name:req.body.name,
            Marks:req.body.Marks,
            City:req.body.City,
            Contact:req.body.Contact,
            ERNO:req.body.ERNO,
            Study:req.body.Study
       });

       await student.save();
       res.send(student);

    }catch(error){
        res.status(404).send({error:"Student Data does not get...!!"});
    }
 });

//update or Save
router.patch("/students/:id",async(req,res)=>{
    try{
         const student = await Student.findOne({_id:req.params.id});
         student.name = req.body.name;
         student.Marks = req.body.Marks,
         student.City = req.body.City,
         student.Contact = req.body.Contact,
         student.ERNO = req.body.ERNO,
         student.Study = req.body.Study
         
         await student.save();
         res.send(student);

    }catch(error){
        res.status(404).send({error:"Student Data is not updated...!!"});

    }
});

//delete

router.delete("/students/:id",async(req,res)=>{

    try{
        await Student.deleteOne({_id:req.params.id});
        res.send("Deleted..!!!");
    }
    catch (error){
        res.status(404).send({error:"Student Data is not Found...!!"});
    }
    });

module.exports = router;