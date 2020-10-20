const express = require('express');
const router = express.Router();
const searchingBook = require('../searchingBook');
const getISBN = require('../getISBN');
const allInfo = require('../allInfo');

router.get('/', (req, res) => {
  console.log('http://localhost:3001/api/');
  res.send({ title: 'hello react!' });
});
router.get('/searchingBook/:name/:page', (req, res) => {
  console.log('http://localhost:3001/api/:name/:page');
  searchingBook(req.params.name, req.params.page).then((data) =>
    res.send(data),
  );
});
router.get('/getResult/:ItemId', (req, res) => {
  console.log('http://localhost:3001/api/:ItemId');
  getISBN(req.params.ItemId).then((ISBN) =>
    allInfo(ISBN).then((data) => res.send(data)),
  );
});

module.exports = router;
