const router = require("express").Router();
const db = require('../models');
const validate = require("validate.js");

const constraints = {
    imageUrl: {
        url: {
            message: "^Invalid URL"
        }    
    }
}

router.get("/", (req, res) => {
    db.productImage.findAll().then((result)=>{
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const post = req.body;
    const invalideData = validate(post, constraints)
    if (invalideData) {
        res.status(400).json(invalideData);
    } else {
        db.productImage.create(post).then( result => {
            res.send(result);
        });
    }
});

router.put("/", (req, res) => {
    const post = req.body;
    const invalideData = validate(post, constraints)
    const id = req.body.id;
    if (invalideData || !id) {
        res.status(400).json(invalideData || "Id is obligatory") ;
    } else {
        db.productImage.update(post, {
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
        db.productImage.destroy({
            where: {id: id}
        })
        .then(() => {
            res.json("The productImage was deleted")
        });
    }
});

module.exports = router;