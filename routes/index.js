var express = require('express');
var router = express.Router();
require('dotenv').config();

var chirp_controller = require('../controllers/chirpController')

const OAuth = require('oauth');

/* GET home page. */
router.get('/', function(req, res, next) {

  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.consumer_key,
        process.env.consumer_secret,
        '1.0A',
        null,
        'HMAC-SHA1'
      );

//trends
//https://api.twitter.com/1.1/trends/place.json?id=23424977
//https://api.twitter.com/1.1/search/tweets.json?q=%23nfldraft
//https://api.twitter.com/1.1/statuses/user_timeline.json

  oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.access_token, //test user token
        process.env.access_secret, //test user secret
        function (e, data){
          if (e) console.error(e);
          console.log(require('util').inspect(data));
          // console.log(JSON.stringify(data,0, 2));
          // done();
          res.send(data);

        });
        // res.render('index', { title: 'Express' });

});

router.get('/user_timeline', chirp_controller.get_user_timeline );
router.get('/:tag', chirp_controller.get_chirp_by_tag );

module.exports = router;
