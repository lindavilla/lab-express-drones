const express = require('express');
const Drone = require('../models/drone.model');

// require the Drone model here

const router = express.Router();



router.get('/drones', (req, res) => {
 Drone.find({})
 .then((drones) => res.render('drones/list', {drones}))
 .catch((error) => console.log('error showing all drones', error));
});

router.get('/drones/create', (req, res, next) => {
res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed } = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;
  Drone.findById(droneId)
  .then(droneToEdit => {
    console.log(droneToEdit);
    return res.render('drones/update-form', { drone: droneToEdit });
  })
  .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;
  const { name, propellers, maxSpeed } = req.body;
  
  Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
const droneId= req.params.id;
Drone.findByIdAndDelete(droneId)
.then(()=> res.redirect('/drones'))
});


module.exports = router;
 