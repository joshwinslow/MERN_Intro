const express = require('express');
const router = express.Router();

const cats_controller = require('../controllers/cats.controller');

//test
router.get('/test', cats_controller.test);

//posts
router.post('/create', cats_controller.cat_create);

//gets
router.get('/:id', cats_controller.cat_details);

//updates
router.put('/update/:id', cats_controller.cat_update)

//delete
router.delete('/delete/:id', cats_controller.cat_delete);

module.exports = router;