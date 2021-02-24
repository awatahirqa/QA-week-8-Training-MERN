const express = require('express');
const router = express.Router();
const { users } = require("../config/db")



//requeste e.g. CRUD

router.get("/getAll", (req, res, next) => {
    users.find((err, users) => {
        if (err) { next(err) } else { res.send(users) }
    })
});
router.get("/get/:id", (req, res, next) => {
    users.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})


router.post("/create", (req, res, next) => {
    const Avenger = new users(req.body);
    Avenger.save().then((err, users) => {
        if (err) {
             next(err)  
    }
            res.send(users)

        
    })

});

router.delete("/delete/:id", (res, req, next) => {
    users.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.statusCode(204).send('succesfully deleted')


    })
});

router.patch("/update/:id", (req, res, next) => {
    users.findByIdAndUpdate(req, params.id,
        req.body,
        { new: true },
        (err, result) => {
            if (err) { next(err); }
            res.status(202).send('Succesfully Updated')


        })
});
//update whole document
//  REPLACE
router.put("/replace/:id", (req, res, next) => {
    const { Heroname ,
      firstname ,
      surname ,
      abilities,
      age ,
      active } = req.body;
    users.findByIdAndUpdate(req.params.id, {
      Heroname ,
      firstname ,
      surname ,
      abilities,
      age ,
      active 
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;