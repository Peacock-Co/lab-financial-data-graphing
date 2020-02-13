const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiUrl = `https://api.coindesk.com/v1/bpi/currentprice.json`;

axios
  .get(apiUrl)
  .then(res => console.log("#########################################", res))
  .catch(err => console.log("Error while getting the data: ", err));


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;