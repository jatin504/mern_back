const {Router} = require("express")
const express = require("express");
const user = require("../models/usermodel");
const router = express.Router()


router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      const userData = await user.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userData)
    } catch (error) {
      console.log(error)
      res.status(400).json({error:error.message})
    }
  });
  
  router.get("/", async(req,res)=>{
    try{
      const alluser = await user.find();
      res.status(200).json(alluser)
    }
    catch(error){
      console.log(object)
      console.log(error)
      res.status(400).json({error:error.message})
    }
  })

  //GET SINGLE USER
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleUser = await user.findById({ _id: id });
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await user.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  //UPDATE
router.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await user.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  module.exports = router