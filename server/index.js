import express from 'express';
import { tree } from './tree.js';

console.log(tree.branches);

//nullish coalescing
const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.json());

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

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  // resp.sendFile('dist/index.html');
  resp.sendFile('index.html', { root: 'dist' });
});

server.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
