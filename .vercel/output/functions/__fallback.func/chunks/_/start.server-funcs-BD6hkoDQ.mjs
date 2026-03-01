import { jsx, jsxs } from 'react/jsx-runtime';
import { R as Route$6, c as createSsrRpc } from './router-CRrnjbt0.mjs';
import { useState, useCallback } from 'react';
import { useRouter } from '@tanstack/react-router';
import { c as createServerFn } from '../virtual/entry.mjs';
import 'react-icons/io5';
import 'react-icons/md';
import 'react-icons/bi';
import 'react-icons/fa6';
import 'react-icons/fa';
import 'nodemailer';
import '@tanstack/router-core/ssr/client';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@tanstack/history';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';
import '@tanstack/react-router/ssr/server';

const addTodo = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(createSsrRpc("34a400ef155cae4517b50b99a6f1db6819e2090dea5a8bc25de22b442e6347a4"));
function Home() {
  const router = useRouter();
  let todos = Route$6.useLoaderData();
  const [todo, setTodo] = useState("");
  const submitTodo = useCallback(async () => {
    todos = await addTodo({
      data: todo
    });
    setTodo("");
    router.invalidate();
  }, [addTodo, todo]);
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white", style: {
    backgroundImage: "radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-4", children: "Start Server Functions - Todo Example" }),
    /* @__PURE__ */ jsx("ul", { className: "mb-4 space-y-2", children: todos?.map((t) => /* @__PURE__ */ jsx("li", { className: "bg-white/10 border border-white/20 rounded-lg p-3 backdrop-blur-sm shadow-md", children: /* @__PURE__ */ jsx("span", { className: "text-lg text-white", children: t.name }) }, t.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("input", { type: "text", value: todo, onChange: (e) => setTodo(e.target.value), onKeyDown: (e) => {
        if (e.key === "Enter") {
          submitTodo();
        }
      }, placeholder: "Enter a new todo...", className: "w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" }),
      /* @__PURE__ */ jsx("button", { disabled: todo.trim().length === 0, onClick: submitTodo, className: "bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors", children: "Add todo" })
    ] })
  ] }) });
}

export { Home as component };
//# sourceMappingURL=start.server-funcs-BD6hkoDQ.mjs.map
