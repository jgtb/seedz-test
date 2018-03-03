import * as express from 'express';

import PropertiesControllers from './controllers';

const router = express.Router();

const findAll = router.get('/properties', PropertiesControllers.findAll);
const findOne = router.get('/property/:id', PropertiesControllers.findOne);
const create  = router.post('/property', PropertiesControllers.create);
const update  = router.put('/property/:id', PropertiesControllers.update);
const remove  = router.delete('/property/:id', PropertiesControllers.remove);

const PropertiesRoutes = [
  findAll,
  findOne,
  create,
  update,
  remove
];

export default PropertiesRoutes;
