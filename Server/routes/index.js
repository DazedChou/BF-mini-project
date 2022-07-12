const router = require('express').Router();
const User = require('../models/User');

router.get('/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        }
        );
});

router.post('/users', (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.phoneNumber) {
        res.json({
            error: 'Please provide all required fields'
        });
    } else {
        User.create(req.body)
        .then(user => {
            res.json(user);
        }
        )
        .catch(err => {
            res.json(err);
        }
        );
    }
});

router.delete('/users/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {
            res.json(user);
        }
        )
        .catch(err => {
            res.json(err);
        }
        );
});



module.exports = router;