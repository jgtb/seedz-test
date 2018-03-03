import * as express from 'express';

import UsersControllers from './controllers';

const router = express.Router();

const findAll = router.get('/users', UsersControllers.findAll);

const UsersRoutes = [
  findAll
];

export default UsersRoutes;
