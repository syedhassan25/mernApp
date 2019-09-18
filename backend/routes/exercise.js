const router = require('express').Router();

const Exercise = require('../model/exercise.model')

router.get('/',(req,res) => {
    Exercise.find().then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error'+err))
});

router.post('/add',(req,res) => {
       const username = req.body.username;
       const description = req.body.description;
       const duration = Number(req.body.duration);
       const date =  Date.parse(req.body.date);

       const newexercise = new exercise({
        username,
        description,
        duration,
        date
       });


       newexercise.save()
       .then(() => res.json('Exersie New Added'))
       .catch(err => res.status(400).json('Error:' + err));


});

router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error'+err))
})

router.delete('/:id', (req,res) =>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted"))
    .catch(err => res.status(400).json('Error'+ err))
})

router.post('/update/:id',(req,res) => {

  
    Exercise.findById(req.params.id)
    .then(exercise => {

        console.log(exercise)
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json("Exercise Update"))
        .catch(err => res.status(400).json('Error'+err));
    })
    .catch(err => res.status(400).json('Error'+err))
});

module.exports = router;