'use strict';

import express from 'express';
const router = express.Router();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

router.get('/api/v1/:model', (req, res, next) => {
  req.model.find({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  req.model.findById(req.params.id)
    .then(data => sendJSON(res, data)) 
    .catch( next );
   
});

router.patch('/api/v1/:model/:id', (req, res, next) => {
  req.model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(data => sendJSON(res, data)) 
    .catch( next );   
});

router.put('/api/v1/:model/:id', (req, res, next) => {
  req.model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(data => sendJSON(res, data)) 
    .catch( next );   
});

router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then( data => sendJSON(res,data))
    .catch( next );
});

let sendJSON = (res, data) => {
  res.status(200).json(data);
};
;

export default router;
