import express, { response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/', (request, response) => {
   return response.json({
      message: 'Hello World'
   });
});

routes.get('/items', async (request, response) => {
   const items = await knex('items').select('*');

   const serializedItems = items.map(item => {
      return {
         name: item.name,
         image_url: `http://localhost:3333/uploads/${item.image}`
      }
   });

   return response.json(serializedItems);
});

export default routes;