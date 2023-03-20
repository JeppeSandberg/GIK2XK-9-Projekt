const router = require("express").Router();
const db = require('../models');
const validate = require("validate.js");

const constraints = {
    description: {
        length: {
            maximum: 200,
            tooLong: "^The Description can't be longer then %{count} letters long."
        }
    },
    rating: {
        numericality: {
            lessThanOrEqualTo: 5,
            notlessThanOrEqualTo: "^The Rating must be less then ${count}"
        }
    }
    
}

router.get("/", (req, res) => {
    db.rating.findAll().then((result)=>{
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const rating = req.body;
    const invalideData = validate(rating, constraints)
    if (invalideData) {
        res.status(400).json(invalideData);
    } else {
        db.rating.create(rating).then( result => {
            res.send(result);
        });
    }
});

router.put("/", (req, res) => {
    const rating = req.body;
    const invalideData = validate(rating, constraints)
    const id = req.body.id;
    if (invalideData || !id) {
        res.status(400).json(invalideData || "Id is obligatory") ;
    } else {
        db.rating.update(rating, {
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
        db.rating.destroy({
            where: {id: id}
        })
        .then(() => {
            res.json(`Inlägget raderades`)
        });
    }
});

module.exports = router;