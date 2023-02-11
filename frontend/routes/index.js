var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/Upload', function (req, res, next) {
  res.render('Upload', { title: 'Express'});
});

router.get("/", async (req, res) => {
  res.render('index', {
    table:table,
    username: "natâ",
  })
});

  const table = [{
    id: 1,
    title: "Floresta com rio",
    url: "/images/Carrousel1.jpg"
  },{
    id: 2,
    title: "Floresta outono",
    url: "/images/Carrousel2.jpg"
  },{
    id: 3,
    title: "Praia com barcos",
    url: "/images/Carrousel3.jpg"
  },]
  
 
module.exports = router;
