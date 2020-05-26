const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('get user info');
});

router.post('/', (req, res) => {
  res.send('get user token');
});

module.exports = router;
