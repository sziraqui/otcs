var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'One Time Chat', appTitle: 'OneTimeChat' });
});


router.post('/init-chat', function(req, res, next) {
  const roomName = req.body.chatRoomName;
  const passkey = req.body.passkey;
  var username = req.body.username;
  /**
   * todos: check if room name exists and verify passkey
   * get random username if undefined
   */
  res.render('chatroom', { title: roomName});

});


module.exports = router;
