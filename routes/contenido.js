var express = require('express');
var router = express.Router();
const {add, list, editC} = require('../controllers/CursoController');
/* GET home page. */

router.get('/:id', list);

router.post('/edit/:id', editC)



module.exports = router;