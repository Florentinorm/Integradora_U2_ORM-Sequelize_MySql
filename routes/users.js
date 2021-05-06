var express = require('express');
var router = express.Router();
const {renderPeriodo, insertPeriodo} = require('../controllers/PeriodoController');


/* GET users listing. */
router.get('/', renderPeriodo);

module.exports = router;
