const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function npmFetch(name) {
  const endpoint = "https://registry.npmjs.org/" + name;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}

const npmjsApi = { fetch: npmFetch };

module.exports = npmjsApi;
