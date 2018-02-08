/**
 *
 * @param req
 * @param res
 */
function userDetails(req, res) {
  console.log('Retrieving user detail');
  res.render('userdetails', {username: req.query.username, useremail: req.query.email});
}

/**
 *
 * @param req
 * @param res
 */
function userlist(req, res) {
  console.log('List of users');
  let db = req.db;
  let collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    res.render('userlist', {
      "userlist": docs
    });
  });
}


/**
 *
 *
 * @param req
 * @param res
 */
function adduser(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username": userName,
    "email": userEmail
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    } else {
      res.redirect("userlist");
    }
  });
}


module.exports = {
  userDetails,
  userlist,
  adduser
}