const express = require('express')
const router = express.Router();

const adminController = require('../controller/admin')

router.post('/create-stud' , adminController.createStud);
router.get('/get-stud' , adminController.getStud);
router.put('/update-stud' , adminController.updateStud);
router.delete('/delete-stud' , adminController.deleteStud);

module.exports = router;
