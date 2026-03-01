import { T as TSS_SERVER_FUNCTION } from '../virtual/entry.mjs';

const createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};

export { createServerRpc as c };
//# sourceMappingURL=createServerRpc-Bd3B-Ah9.mjs.map
