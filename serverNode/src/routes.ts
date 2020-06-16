import express from 'express';

import Knex from 'knex';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemscontroller = new ItemsController();

routes.get('/items', itemscontroller.index );

routes.post('/poitns', pointsController.create );

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

 export default routes;