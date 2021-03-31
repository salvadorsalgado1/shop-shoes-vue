const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createPool({
  connectionLimit:10,
  host:'us-cdbr-east-03.cleardb.com',
  user:'ba03703ce4eefc',
  database:'heroku_7a5b103bbc9db4f',
  password:'ec13aff6'
})


router.get('/info/:id', (req, res, next)=>{
    let id = req.params.id
    const sqlGet = "select \
    titles.product_id,\
    titles.product_title, \
    titles.brand,\
    inventory.stock, \
    prices.listing_price, \
    prices.discount, \
    url.image_url_one, \
    url.image_url_two, \
    url.image_url_three, \
    url.image_url_four, \
    url.image_url_five, \
    content.content \
    from heroku_7a5b103bbc9db4f.titles inner join heroku_7a5b103bbc9db4f.categories on titles.product_id = categories.product_id \
    inner join heroku_7a5b103bbc9db4f.inventory on titles.product_id = inventory.product_id \
    inner join heroku_7a5b103bbc9db4f.prices on titles.product_id = prices.product_id \
    inner join heroku_7a5b103bbc9db4f.url on titles.product_id = url.product_id \
    inner join heroku_7a5b103bbc9db4f.content on titles.product_id = content.product_id \
    where titles.product_id = ?";
    
    db.query(sqlGet, id, (err, result)=>{
        res.send(result)
    })
})

module.exports = router;