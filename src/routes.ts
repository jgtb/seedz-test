import { Application } from 'express';

import UsersRoutes from './modules/users/routes';
import PropertiesRoutes from './modules/properties/routes';

const ROUTES = [
  UsersRoutes,
  PropertiesRoutes
]

const urlBase = '/api/v1';

const allRoutes = (server: Application) => {
  // Import allRoutes
  ROUTES.forEach(e => e.forEach(e => server.use(`${urlBase}`, e)));

  // Default route errorHandler
  server.use(function(req, res, next) {
    res.status(500).json({
      status: 500,
      msg: `Error on route. This route exist?`,
      route: req.originalUrl
    });
    next();
  });
};

export default allRoutes;
