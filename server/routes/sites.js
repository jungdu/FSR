const express = require('express');
const router = express.Router();
const Site = require('../models/site');
const {normalizeErrors} = require('../helpers/mongoose');

router.get('/', function(req, res){
    Site.find(function(err, docs){
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)})
        }
        return res.json(docs);
    })
})

// /:kind = 'img'|'font'|'sound'
router.get('/:siteKind', function(req, res){
    const {siteKind} = req.params;
    Site.where({siteKind}).exec(function(err, foundRentals){
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
        return res.json(foundRentals);
    })
});

router.get('/getbyid/:siteId', function(req, res){

    const {siteId} = req.params
    Site.findOne({_id:siteId}, function(err, site){
        if(err){
            console.log(err);
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
        return res.json(site);
    })
});

router.post('/update', function(req, res){
    const {_id, siteName, siteDescription, siteUrl, siteImgUrl} = req.body;
    Site.findByIdAndUpdate(_id, 
        {siteName, siteDescription, siteUrl, siteImgUrl},
        function(err, doc){
            if(err){
                console.log("update error");
            }
            res.json(doc);
        })
});

module.exports = router;