import express from 'express';
import { tree } from './tree.js';
import { courses } from './courses.js';
import { users } from './users.js';
import dayjs from 'dayjs';
import 'dayjs/locale/cs.js';
dayjs.locale('cs');

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

// STROM

const userBranch = (branch, userIds) => ({
  id: branch.id,
  name: branch.name,
  leaves: branch.leaves.map((leaf) => ({
    id: leaf.id,
    name: leaf.name,
    checkboxes: leaf.checkboxes.map((checkboxItem) => ({
      id: checkboxItem.id,
      name: checkboxItem.name,
      done: userIds.includes(checkboxItem.id),
    })),
  })),
});

server.get('/api/tree', (req, resp) => {
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  const userIds = user.tree.map((id) => id.slice(2));
  const newTree = tree.branches.map((branch) => userBranch(branch, userIds));

  resp.send({
    status: 'success',
    results: newTree,
  });
});

// LISTY - CHECKBOXY

const userLeaf = (leaf, userIds) => ({
  id: leaf.id,
  name: leaf.name,
  checkboxes: leaf.checkboxes.map((checkboxItem) => ({
    id: checkboxItem.id,
    name: checkboxItem.name,
    done: userIds.includes(checkboxItem.id),
  })),
});

server.get('/api/tree/branch/:id/leaf/:id2', (req, resp) => {
  const { id, id2 } = req.params;
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  const userIds = user.tree.map((id) => id.slice(2));
  const branch = tree.branches.find((i) => i.id === id);
  const leaf = branch.leaves.find((i) => i.id === id2);

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

  const newLeaf = userLeaf(leaf, userIds);

  resp.send({
    status: 'success',
    results: newLeaf,
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

  if (branch === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Branch not found',
    });
    return;
  }

  const treeId = branchId + leafId + itemId;

  if (!user.tree.includes(treeId)) {
    user.tree.push(treeId);
  } else {
    const itemIndex = user.tree.indexOf(treeId);
    user.tree.splice(itemIndex, 1);
  }

  const userIds = user.tree.map((id) => id.slice(2));
  const newBranch = userBranch(branch, userIds);

  resp.send({
    status: 'success',
    results: newBranch,
  });
});

// KURZY KOMUNITY

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

// KURZY UŽIVATELE

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
      courses: user.courses,
      dashboard: user.dashboard,
    },
  });
});

server.post('/api/user-courses', (req, resp) => {
  const token = req.headers.authorization;
  const { name, url, active, id } = req.body;

  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  user.courses.push({ name, url, active, id });
  resp.send({
    status: 'success',
    results: {
      courses: user.courses,
    },
  });
});

server.post('/api/course/:id', (req, resp) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { active } = req.body;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  const course = user.courses.find((i) => i.id === id);
  course.active = active;

  resp.send({
    status: 'success',
    results: user.courses,
  });
});

// DASHBOARD

server.get('/api/create-dashboard', (req, resp) => {
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  if (user.dashboard === undefined) {
    user.streak = 0;
    user.dashboardDate = dayjs().startOf('minute').toISOString();
    user.dashboard = user.courses
      .filter((course) => course.active)
      .map((course) => ({ done: false, ...course }));
  }

  resp.send({
    status: 'success',
    results: user,
  });
});

server.get('/api/user-dashboard', (req, resp) => {
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  if (user.dashboard === undefined) {
    resp.send({
      status: 'success',
      results: null,
    });
    return;
  }

  const minuteStart = dayjs().startOf('minute').toISOString();

  if (minuteStart !== user.dashboardDate) {
    const allDone = user.dashboard.every((course) => course.done);
    user.streak = allDone ? user.streak + 1 : 0;
    user.dashboardDate = minuteStart;
    user.dashboard = user.courses
      .filter((course) => course.active)
      .map((course) => ({ done: false, ...course }));
  }

  resp.send({
    status: 'success',
    results: user,
  });
});

server.post('/api/user-dashboard/course/:id', (req, resp) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { done } = req.body;
  const user = users.find((u) => u.token === token);

  if (user === undefined) {
    resp.sendStatus(403);
    return;
  }

  const dashboardCourse = user.dashboard.find((i) => i.id === id);

  dashboardCourse.done = done;

  resp.send({
    status: 'success',
    results: dashboardCourse,
  });
});

server.get('/api/current-leaf/:id', (req, resp) => {
  const { id } = req.params;

  const branch = tree.branches.find((branch) => branch.id === id.slice(0, 1));
  const leaf = branch.leaves.find((leaf) => leaf.id === id.slice(1, 2));

  if (leaf === undefined) {
    resp.status(404).send({
      status: 'error',
      message: 'Leaf not found',
    });
    return;
  }

  resp.send({
    status: 'success',
    results: leaf.name,
  });
});

// END

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  resp.sendFile('index.html', { root: 'dist' });
});

server.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
