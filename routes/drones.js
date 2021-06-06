const express = require('express');
const Drone = require('../models/drone.model.js');

// require the Drone model here

const router = express.Router();



router.get('/drones', (req, res) => {
 Drone.find()
 .then(showAllDrones => {
   res.render('drones/list', { drones: showAllDrones });
 })
 .catch(error => {console.log('error showing all drones', error)
})
});

router.get('/drones/create', (req, res, next) => {

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
