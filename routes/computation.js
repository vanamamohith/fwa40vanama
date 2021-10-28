var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "http://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    let x = search_params.get('x')
    if(x === null){
        let rand = Math.floor(Math.random()*100)
        res.render('computation', {compute:`math.log applied to ${rand} is ${Math.log(rand)}`} );
    }else{
        res.render('computation', {compute:`math.log applied to ${x} is ${Math.log(x)}`} );

    }
  
});

module.exports = router;