var express = require('express');
var router = express.Router();
require('dotenv').config();

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

  oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=23424977',
        process.env.access_token, //test user token
        process.env.access_secret, //test user secret
        function (e, data, res){
          if (e) console.error(e);
          console.log(require('util').inspect(data));
          // console.log(JSON.stringify(data,0, 2));
          // done();


        });
        res.render('index', { title: 'Express' });

});

module.exports = router;
