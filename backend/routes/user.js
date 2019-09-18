const router = require('express').Router();
const User = require('../model/user.model');

router.get('/',(req,res) => {
    User.find()
        .then(users => 
            res.json(users))
        .catch(err => {
           
            res.status(400).json('Error:' +err)});
});

router.post('/add',(req,res) => {
        const username = req.body.username;
        const newUser = new  User({username});
        newUser.save().then(() => res.json('user added'))
        .catch((err => {
            console.log('teesting',req.body);
            res.status(400).json('Error:'+err)}))
});


router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
        res.status(400).json('Error'+err)
    })
})

router.delete('/:id',(req,res) => {
        User.findByIdAndDelete(req.params.id)
        .then(()=> res.json('User Deleted successfully'))
        .catch(err => res.status(400).json('Error'+err))
})

router.post('/update/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(user => {
        user.username =  req.body.username;
        user.save()
        .then(()=>{
            res.json('User Updated');
        })
        .catch(err => {
            res.status(400).json('Error'+err)
        })
    })
    .catch(err => {
        res.status(400).json('Error'+err)
    })
})

module.exports = router;