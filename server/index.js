import express from 'express';
import { tree } from './tree.js';
import { courses } from './courses.js';
import { users } from './users.js';

const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.json());

// LOGIN

server.post('/api/login', (req, resp) => {
  const { login, password } = req.body;

  const user = users.find((u) => u.login === login && u.password === password);

  if (user === undefined) {
    resp.status(401).send({
      status: 'error',
      message: 'Invalid user credentials',
    });
    return;
  }

  resp.send({
    status: 'success',
    results: {
      login: user.login,
      name: user.name,
      token: user.token,
    },
  });
});

// STROM

server.get('/api/tree', (req, resp) => {
  resp.send({
    status: 'success',
    results: tree,
  });
});

// JEDNOTLIVÉ VĚTVE

server.get('/api/tree/branch/:id', (req, resp) => {
  const { id } = req.params;

  const branch = tree.branches.find((i) => i.id === id);

  if (branch === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Checklist not found',
    });
    return;
  }
  resp.send({
    status: 'success',
    results: branch,
  });
});

server.post('/api/tree/branch/:id', (req, resp) => {
  const { id } = req.params;
  const { done } = req.body;

  const branch = tree.branches.find((i) => i.id === id);

  branch.done = done;

  resp.send({
    status: 'success',
    results: branch,
  });
});

// LISTY

server.get('/api/tree/branch/:id/leaf/:id2', (req, resp) => {
  const { id, id2 } = req.params;
  const { done } = req.body;

  const branch = tree.branches.find((i) => i.id === id);
  const leaves = branch.leaves;
  const leaf = leaves.find((i) => i.id === id2);

  if (leaf === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Checklist not found',
    });
    return;
  }
  resp.send({
    status: 'success',
    results: leaf,
  });
});

server.post('/api/tree/branch/:id/leaf/:id2', (req, resp) => {
  const { id, id2 } = req.params;
  const { done } = req.body;

  const branch = tree.branches.find((i) => i.id === id);
  const leaves = branch.leaves;
  const leaf = leaves.find((i) => i.id === id2);

  leaf.done = done;

  resp.send({
    status: 'success',
    results: leaf,
  });
});

// CHECKLISTY

server.post('/api/tree/branch/:id/leaf/:id2/item/:id3', (req, resp) => {
  const { id, id2, id3 } = req.params;
  const { done } = req.body;

  const branch = tree.branches.find((i) => i.id === id);
  const leaves = branch.leaves;
  const leaf = leaves.find((i) => i.id === id2);
  const checkboxes = leaf.checkboxes;
  const checkboxItem = checkboxes.find((i) => i.id === id3);

  checkboxItem.done = done;

  resp.send({
    status: 'success',
    results: checkboxItem,
  });
});

// KURZY

server.get('/api/courses', (req, resp) => {
  resp.send({
    status: 'success',
    results: courses,
  });
});

server.post('/api/courses', (req, resp) => {
  const { name, url } = req.body;
  courses.push({ name, url });
  resp.send({
    status: 'success',
    results: courses,
  });
});

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  // resp.sendFile('dist/index.html');
  resp.sendFile('index.html', { root: 'dist' });
});

server.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
