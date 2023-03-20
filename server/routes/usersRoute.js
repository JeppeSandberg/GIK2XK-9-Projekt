const router = require("express").Router();
const db = require('../models');
const validate = require("validate.js");

const constraints = {
    email: {
        length: {
            minimum: 4,
            maximum: 200,
            tooShort: "^The E-mail address must be at minimum %{count} letters long.",
            tooLong: "^The E-mail address can't be longer then %{count} letters long."
        },
        email: {
            message: "E-mail adress is in a wrong format."
        }
    },
    password: {
        length: {
            minimum: 6,
            maximum: 50,
            tooShort: "^The Password must be at minimum %{count} characters long.",
            tooLong: "^The Password can't be longer then %{count} characters long."
        }
    },
    imageUrl: {
        url: {
            message: "^Invalid URL"
        }    
    }
    
}

router.get("/:id", (req, res) => {
    db.user.findOne().then((result)=>{
        res.send(result);
    });
});


router.get("/", (req, res) => {
    db.user.findAll().then((result)=>{
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const user = req.body;
    const invalideData = validate(user, constraints)
    if (invalideData) {
        res.status(400).json(invalideData);
    } else {
        db.user.create(user).then( result => {
            res.send(result);
        });
    }
});

router.put("/", (req, res) => {
    const user = req.body;
    const invalideData = validate(user, constraints)
    const id = req.body.id;
    if (invalideData || !id) {
        res.status(400).json(invalideData || "Id is obligatory") ;
    } else {
        db.user.update(user, {
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
        db.user.destroy({
            where: {id: id}
        })
        .then(() => {
            res.json("The User was deleted")
        });
    }
});

module.exports = router;