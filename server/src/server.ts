import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
const users = [
   'Rodrigo',
   'Luana',
   'Gustavo'
];

app.get('/users', (request, response) => {
   const search = String(request.query.search);

   const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

   response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
   const id = Number(request.params.id);

   return response.json(users[id]);
});

app.post('/users', (request, response) => {
   const data = request.body;

   const user = {
      name: data.name,
      email: data.email
   }

   return response.json(user);
});

app.listen(3333);
console.log("Listening at port 3333");