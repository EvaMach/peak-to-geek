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

// LISTY - CHECKBOXY

server.get('/api/tree/branch/:id/leaf/:id2', (req, resp) => {
  const { id, id2 } = req.params;

  const branch = tree.branches.find((i) => i.id === id);
  const leaves = branch.leaves;
  const leaf = leaves.find((i) => i.id === id2);

  if (branch === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Branch not found',
    });
    return;
  }

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

// USER INFO
server.get('/api/user', (req, resp) => {
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  resp.send({
    status: 'success',
    results: user,
  });
});

// CHECKBOXY UŽIVATELE

server.get('/api/user-branch/:id', (req, resp) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  const branch = tree.branches.find((i) => i.id === id);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  if (branch === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Branch not found',
    });
    return;
  }

  const userIds = user.tree.map((id) => id.slice(2));

  branch.leaves.forEach((leaf) => {
    leaf.checkboxes.forEach((checkboxItem) => {
      if (userIds.includes(checkboxItem.id)) {
        checkboxItem.done = true;
      } else {
        checkboxItem.done = false;
      }
    });
  });

  resp.send({
    status: 'success',
    results: branch,
  });
});

server.post('/api/user-tree/update', (req, resp) => {
  const { branchId, leafId, itemId } = req.body;
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  const branch = tree.branches.find((i) => i.id === branchId);

  user.tree.push(branchId + leafId + itemId);

  const userIds = user.tree.map((id) => id.slice(2));

  branch.leaves.forEach((leaf) => {
    leaf.checkboxes.forEach((checkboxItem) => {
      userIds.forEach((id) => {
        if (checkboxItem.id === id) {
          checkboxItem.done = true;
        }
      });
    });
  });

  resp.send({
    status: 'success',
    results: branch,
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

server.get('/api/user-courses', (req, resp) => {
  const token = req.headers.authorization;

  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  resp.send({
    status: 'success',
    results: {
      login: user.login,
      courses: user.courses,
    },
  });
});

server.post('/api/user-courses', (req, resp) => {
  const token = req.headers.authorization;
  const { name, url } = req.body;

  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  user.courses.push({ name, url });
  resp.send({
    status: 'success',
    results: {
      login: user.login,
      courses: user.courses,
    },
  });
});

// END

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  // resp.sendFile('dist/index.html');
  resp.sendFile('index.html', { root: 'dist' });
});

server.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
