import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import users from '../model/user.js';



const router = express.Router();


router.get('/', async (req,res) => {
  
    try {
        const user = await users.find();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})



router.post('/', (req,res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() }

    users.create(userWithId, (err,data) => {
        if (err) {
            res.send(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


router.get('/:id', async (req,res) => {
  
    try {
        const user = await users.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

router.patch('/:id' , async (req,res)=>{

   try{
        const user = await users.findById(req.params.id);
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        const u1 = await user.save();
        res.send(u1);
    }   catch(error){
        res.send(error);
    }
})

router.delete('/:id' , async (req,res)=>{
      
    try{
        const user = await users.findById(req.params.id);
        const u1 = await user.remove();
        res.send(u1);
    }   catch(error){
        res.send(error);
    }  
})


export default router;