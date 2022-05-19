import express from 'express';
import { tree } from './tree.js';

console.log(tree.branches);

//nullish coalescing
const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.json());

server.get('/api/tree', (req, resp) => {
  resp.send({
    status: 'success',
    results: tree,
  });
});

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

server.get('/api/tree/leaf/:id', (req, resp) => {
  const { id } = req.params;

  const leaf = tree.branches[leaves].find((i) => i.id === id);

  if (leaf === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Leaf not found',
    });
    return;
  }
  resp.send({
    status: 'success',
    results: leaf,
  });
});

server.post('/api/tree/branch/:id/leaf/:id', (req, resp) => {
  const { id } = req.params;
  const { done } = req.body;

  const leaf = tree.branches.find((i) => i.id === id);

  leaf.done = done;

  resp.send({
    status: 'success',
    results: leaf,
  });
});

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  resp.sendFile('dist/index.html');
});

server.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
