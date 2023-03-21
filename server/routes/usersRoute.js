const router = require("express").Router();
const userService = require("../services/userService");

router.get('/:id', (req, res) => {
    const id = req.params.id;
  
    userService.getById(id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/", (req, res) => {
    const user = req.body;
    userService.create(user).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.put("/", (req, res) => {
    const user = req.body;
    const id = req.body.id;
    
    userService.update(user, id).then((result) => {
        res.status(result.status).json(result.data);
    }); 
});

router.delete("/", (req, res) => {
    const id = req.body.id;
    userService.destroy(user, id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

module.exports = router;