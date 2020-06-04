import knex from '../database/connection';
import { Request, Response} from 'express';

class ItemsController {
   async index(request: Request, response: Response) {
      const items = await knex('items').select('*');

      const serializedItems = items.map(item => {
         return {
            id: item.id,
            name: item.name,
            image_url: `http://localhost:3333/uploads/${item.image}`
         }
      });
   }
}

export default ItemsController;