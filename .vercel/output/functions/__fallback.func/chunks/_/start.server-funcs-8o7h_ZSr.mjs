import { c as createServerRpc } from './createServerRpc-Bd3B-Ah9.mjs';
import fs from 'node:fs';
import { c as createServerFn } from '../virtual/entry.mjs';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:path';
import 'node:crypto';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import '@tanstack/react-router';

const TODOS_FILE = "todos.json";
async function readTodos() {
  return JSON.parse(await fs.promises.readFile(TODOS_FILE, "utf-8").catch(() => JSON.stringify([{
    id: 1,
    name: "Get groceries"
  }, {
    id: 2,
    name: "Buy a new phone"
  }], null, 2)));
}
const getTodos_createServerFn_handler = createServerRpc({
  id: "c9d51a5243700889c80f82ed57a4ce74b25f188e5ebd534c9c64965dc44e8e8d",
  name: "getTodos",
  filename: "src/routes/demo/start.server-funcs.tsx"
}, (opts) => getTodos.__executeServer(opts));
const getTodos = createServerFn({
  method: "GET"
}).handler(getTodos_createServerFn_handler, async () => await readTodos());
const addTodo_createServerFn_handler = createServerRpc({
  id: "34a400ef155cae4517b50b99a6f1db6819e2090dea5a8bc25de22b442e6347a4",
  name: "addTodo",
  filename: "src/routes/demo/start.server-funcs.tsx"
}, (opts) => addTodo.__executeServer(opts));
const addTodo = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(addTodo_createServerFn_handler, async ({
  data
}) => {
  const todos = await readTodos();
  todos.push({
    id: todos.length + 1,
    name: data
  });
  await fs.promises.writeFile(TODOS_FILE, JSON.stringify(todos, null, 2));
  return todos;
});

export { addTodo_createServerFn_handler, getTodos_createServerFn_handler };
//# sourceMappingURL=start.server-funcs-8o7h_ZSr.mjs.map
