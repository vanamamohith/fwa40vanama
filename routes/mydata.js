var express = require('MyData');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MyData', { title: 'Mohith Naga Venkata Sai Vanama' });
});

module.exports = router;
