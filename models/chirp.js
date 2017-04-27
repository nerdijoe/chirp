const OAuth = require('oauth');
require('dotenv').config();

class Chirp {
  constructor() {
    this.oauth = new OAuth.OAuth(
          'https://api.twitter.com/oauth/request_token',
          'https://api.twitter.com/oauth/access_token',
          process.env.consumer_key,
          process.env.consumer_secret,
          '1.0A',
          null,
          'HMAC-SHA1'
        );
  }

  get_chirp_by_tag ( tag, callback ) {
    this.oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=%23${tag}`,
            process.env.access_token, //test user token
            process.env.access_secret, //test user secret
            function (e, data){
              if (e) console.error(e);
              // console.log(require('util').inspect(data));
              // console.log(JSON.stringify(data,0, 2));
              // done();
              // res.send(data);

              callback(data);
            });

  }


  get_user_timeline ( callback ) {
    this.oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            process.env.access_token, //test user token
            process.env.access_secret, //test user secret
            function (e, data){
              if (e) console.error(e);
              // console.log(require('util').inspect(data));
              // console.log(JSON.stringify(data,0, 2));
              // done();
              // res.send(data);

              callback(data);
            });

  }
}

module.exports = Chirp;
