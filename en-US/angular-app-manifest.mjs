
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "route": "/en-US/home"
  },
  {
    "renderMode": 2,
    "route": "/en-US/about"
  },
  {
    "renderMode": 2,
    "route": "/en-US/services"
  },
  {
    "renderMode": 2,
    "route": "/en-US/contact"
  },
  {
    "renderMode": 2,
    "route": "/en-US/blog"
  },
  {
    "renderMode": 2,
    "route": "/en-US/blog/1"
  },
  {
    "renderMode": 0,
    "route": "/en-US/blog/*"
  },
  {
    "renderMode": 2,
    "route": "/en-US/gallery"
  },
  {
    "renderMode": 2,
    "route": "/en-US/book-appointment"
  },
  {
    "renderMode": 2,
    "route": "/en-US/careers"
  },
  {
    "renderMode": 2,
    "route": "/en-US/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/en-US/offer"
  },
  {
    "renderMode": 2,
    "route": "/en-US/offer-ar"
  },
  {
    "renderMode": 2,
    "route": "/en-US/thanks"
  },
  {
    "renderMode": 2,
    "route": "/en-US/confirmation"
  },
  {
    "renderMode": 2,
    "route": "/en-US/thank-you"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10285, hash: '86b5585b8f3440578860f4fd2114f939578d055e5876f157b445c273bdf78561', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1203, hash: '599f25f972cd03e5a39672f4e3feeb3eab4d48eadefe0c893095759f7b757cde', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 69846, hash: '2e27d719ceae3504b296839a3b799b71e5a984ad51f42fd21ea509d08c9172ba', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 67124, hash: '86487e51b67949249be9df5c4bb64aef95f72e6cfc94b915a9c552e9d372d33d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 33482, hash: '5bc5e569ee9ff96eb6a0cc0f4ef33f0c894435d7588eedf3dab46d5e1f909020', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 69846, hash: '2e27d719ceae3504b296839a3b799b71e5a984ad51f42fd21ea509d08c9172ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 45188, hash: 'f1ecfb7fda11f44d1177e2b32cca17b8f537100b32ee112bf9d26944dc1c5178', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 122680, hash: '98f058c7fec5e55a73bd9cbe25830c32787c3636ed731bb474148db83ffb83ac', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'book-appointment/index.html': {size: 39877, hash: '45f12b4afb67b404dc64ab08e48cfef051c813b7c0fc70b44d9b0eb5f85162d8', text: () => import('./assets-chunks/book-appointment_index_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 40051, hash: '4545187246a898f4651ae3a3956a83fb4079d26accce2d75c1b44dd78726d6d7', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 35570, hash: 'ec59c5f66aa2aedaf42534010d3300dc61c6573c00b92f26c8d6e65cd8a14633', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'offer/index.html': {size: 81421, hash: '60e7aa85f3f042ec344eb50d91149687c130acf7e3a243c5f7dd1ec2adcac6b4', text: () => import('./assets-chunks/offer_index_html.mjs').then(m => m.default)},
    'offer-ar/index.html': {size: 77373, hash: '34e9d88abd68f7e63215951ab32ce72793ba00503f5a6f89de9231969394f5af', text: () => import('./assets-chunks/offer-ar_index_html.mjs').then(m => m.default)},
    'thanks/index.html': {size: 12966, hash: 'dfc20270bb7a0fe22b0d0bcb84f6a9e73e4e1e18498472effcf69983d54db40a', text: () => import('./assets-chunks/thanks_index_html.mjs').then(m => m.default)},
    'confirmation/index.html': {size: 22823, hash: '29adfc8a333f1481fc0cbe3aba39197a329a6940a4f1ee0de8f7827692eed9fe', text: () => import('./assets-chunks/confirmation_index_html.mjs').then(m => m.default)},
    'thank-you/index.html': {size: 12973, hash: 'a0a9cc06bff48c4a248cb3dec2f5bf957afcdb2cc359ad6a0372907986524a8e', text: () => import('./assets-chunks/thank-you_index_html.mjs').then(m => m.default)},
    'blog/1/index.html': {size: 30056, hash: 'a6e1fcaf33a074e83835b91a330793a063f371b2f6ff7b4ed28ebb3ec80ca2e7', text: () => import('./assets-chunks/blog_1_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 128760, hash: '8deb5e3bb84185af72e69b32de39ba0db6616850911aab6c5c18ff118179f02f', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-2TUB5JIZ.css': {size: 390820, hash: 'WuRldjFGIO0', text: () => import('./assets-chunks/styles-2TUB5JIZ_css.mjs').then(m => m.default)}
  },
};
