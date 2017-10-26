var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [{
              'url': 'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
              'title': "Inside Andrew Puzder's failed nomination",
              'description': "In the end, AP had too much baggage - both personal and professional",
              'source': 'cnn',
              'urlToImage': 'http://images.outbrain.com/Imaginarium/api/uuid/fb80a4d4ebb7802bf5a763c8436a764e313fb8930713f33e7285cd521da39d5a/570/320/1.0',
              'digest': '3RjuEomJo2601syZbU70HA==\n',
              'reason': 'Recommend'
            },{
              'url': 'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
              'title': "Inside Andrew Puzder's failed nomination",
              'description': "In the end, AP had too much baggage - both personal and professional",
              'source': 'cnn',
              'urlToImage': 'http://images.outbrain.com/Imaginarium/api/uuid/fb80a4d4ebb7802bf5a763c8436a764e313fb8930713f33e7285cd521da39d5a/570/320/1.0',
              'digest': 'abc\n',
              'reason': 'Recommend'
          }];
  res.json(news);
});

module.exports = router;
