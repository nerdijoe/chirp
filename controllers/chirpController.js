var Chirp = require('../models/chirp');

var chirp = new Chirp();


exports.get_user_timeline = (req, res, next) => {
  chirp.get_user_timeline( (data) => {
    console.log("*************");
    console.log(data);
    res.send(data);
  });

}

exports.get_chirp_by_tag = (req, res, next) => {
  var tag = req.params.tag;
  chirp.get_chirp_by_tag( tag, (data) => {
    console.log("*************");
    console.log(data);
    res.send(data);
  });

}
