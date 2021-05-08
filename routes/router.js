const router = require('express').Router();
const formController = require('../controller/formController');


router.post('/addform',formController.addFormData);
router.post('/getForm',formController.getform);



module.exports = router;