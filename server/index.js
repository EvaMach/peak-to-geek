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
  const userIds = user.tree.map((id) => id.slice(2));

  const newTree = tree.branches.map((branch) => userBranch(branch, userIds));

  resp.send({
    status: 'success',
    results: newTree,
  });
});

// LISTY - CHECKBOXY

server.get('/api/tree/branch/:id/leaf/:id2', (req, resp) => {
  const { id, id2 } = req.params;
  const token = req.headers.authorization;
  const user = users.find((u) => u.token === token);
  const userIds = user.tree.map((id) => id.slice(2));

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
      login: user.login,
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
    results: course,
  });
});

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

  const weekStart = dayjs().startOf('minute').toISOString();
  console.log(weekStart, 'user', user.dashboardDate);

  if (weekStart !== user.dashboardDate) {
    const allDone = user.dashboard.every((course) => course.done);
    user.streak = allDone ? user.streak + 1 : 0;
    user.dashboardDate = weekStart;
    user.dashboard = user.courses
      .filter((course) => course.active)
      .map((course) => ({ done: false, ...course }));
  }

  resp.send({
    status: 'success',
    results: user,
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
