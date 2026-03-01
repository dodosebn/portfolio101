import { c as createServerRpc } from './createServerRpc-Bd3B-Ah9.mjs';
import { c as createServerFn } from '../virtual/entry.mjs';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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

const getPunkSongs_createServerFn_handler = createServerRpc({
  id: "f74da881407a186b78a7af058df21dafb0126eb11e5a4d54fd322e8feb5038f1",
  name: "getPunkSongs",
  filename: "src/data/demo.punk-songs.ts"
}, (opts) => getPunkSongs.__executeServer(opts));
const getPunkSongs = createServerFn({
  method: "GET"
}).handler(getPunkSongs_createServerFn_handler, async () => [{
  id: 1,
  name: "Teenage Dirtbag",
  artist: "Wheatus"
}, {
  id: 2,
  name: "Smells Like Teen Spirit",
  artist: "Nirvana"
}, {
  id: 3,
  name: "The Middle",
  artist: "Jimmy Eat World"
}, {
  id: 4,
  name: "My Own Worst Enemy",
  artist: "Lit"
}, {
  id: 5,
  name: "Fat Lip",
  artist: "Sum 41"
}, {
  id: 6,
  name: "All the Small Things",
  artist: "blink-182"
}, {
  id: 7,
  name: "Beverly Hills",
  artist: "Weezer"
}]);

export { getPunkSongs_createServerFn_handler };
//# sourceMappingURL=demo.punk-songs-Be2hm0Du.mjs.map
