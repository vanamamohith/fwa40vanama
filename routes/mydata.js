var express = require('My Data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('My Data', { title: 'Mohith Naga Venkata Sai Vanama' });
});

module.exports = router;
