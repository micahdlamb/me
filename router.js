var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  var template = req.path.slice(1) || 'index'
  res.render(template, {req: req}, function(err, html){
    if (err){
      if (err.message.indexOf('Failed to lookup view') !== -1)
        return next()
      else
        throw err
    }
    res.send(html)
  })
})

module.exports = router;
