
export default {
  basePath: 'https://asalem020.github.io/app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
