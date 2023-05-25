const express = require("express");
const router = express.Router();

const Employee = require("../models/employee")

router.get("/getallemployees",async(req,res)=>{
    
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (error) {
        return res.status(400).json({message:error});
    }
}); 

router.post('/addemployee',async(req,res)=>{
    try {
        const newRoom = await Employee(req.body)
        await newRoom.save()

        res.send('New Employee has been added successfully')
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router;