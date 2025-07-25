
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://asalem020.github.io/app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/app/home"
  },
  {
    "renderMode": 2,
    "route": "/app/about"
  },
  {
    "renderMode": 2,
    "route": "/app/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/app/home",
    "route": "/app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6008, hash: 'e0bb78c8913505f4b328d3f8fa9f91e7992c3206f3661c8c74d05327c654e85b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'e5eb72db3e7699480497f67f938e5549eafb60c2cfb47d2ad151722e7f68af5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 51207, hash: 'dbc0b3e209e4b799a58a5d762e5c53a1ef57425be9355ffd7fa78b2b431e3a8e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 46020, hash: '00b1778c4de3b666fb17232567c80322dd15db7ae6af1ad8cd99f85065162cc1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 45559, hash: 'a4eff7fd0abfa2cc671bfa2dcc10a22e3e2980fab8ab891efe56afd931c369e1', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Q2NH263R.css': {size: 389337, hash: 'kztf1q8OBUQ', text: () => import('./assets-chunks/styles-Q2NH263R_css.mjs').then(m => m.default)}
  },
};
