const router = require("express").Router();
const db = require('../models');


router.get("/", (req, res) => {
    db.cart.findAll().then((result)=>{
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const post = req.body;
        db.cart.create(post).then( result => {
            res.send(result);
        });
});

router.put("/", (req, res) => {
    const post = req.body;
    const id = req.body.id;
    if (!id) {
        res.status(400).json("Id is obligatory") ;
    } else {
        db.cart.update(post, {
            where: {id: id}
        }).then((result) => {
            res.send(result)
        });
    }
    
});

router.delete("/", (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.status(400).json("Id is obligatory") ;
    } else {
        db.cart.destroy({
            where: {id: id}
        })
        .then(() => {
            res.json("The cart was deleted")
        });
    }
});

module.exports = router;