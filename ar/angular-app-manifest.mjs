
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "route": "/ar/home"
  },
  {
    "renderMode": 2,
    "route": "/ar/about"
  },
  {
    "renderMode": 2,
    "route": "/ar/services"
  },
  {
    "renderMode": 2,
    "route": "/ar/contact"
  },
  {
    "renderMode": 2,
    "route": "/ar/blog"
  },
  {
    "renderMode": 2,
    "route": "/ar/blog/1"
  },
  {
    "renderMode": 0,
    "route": "/ar/blog/*"
  },
  {
    "renderMode": 2,
    "route": "/ar/gallery"
  },
  {
    "renderMode": 2,
    "route": "/ar/book-appointment"
  },
  {
    "renderMode": 2,
    "route": "/ar/careers"
  },
  {
    "renderMode": 2,
    "route": "/ar/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/ar/offer"
  },
  {
    "renderMode": 2,
    "route": "/ar/offer-ar"
  },
  {
    "renderMode": 2,
    "route": "/ar/thanks"
  },
  {
    "renderMode": 2,
    "route": "/ar/confirmation"
  },
  {
    "renderMode": 2,
    "route": "/ar/thank-you"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10279, hash: 'c012582d04fdcc7e449143edb11bf5ff9d931bf574c99a81fe143b67840a57a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1197, hash: 'a2854309f2645575805aa9373f4d74e805144dee13d9c330d0274408dc823bfd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 72400, hash: 'aeebb9966be3487cba8e15dbc89f0a6e56f5dceab2ea4abc6357cb40bfe7026e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 69846, hash: '90e6a776f3c2ad50c9a241c53d5cead6b0862a7c8ee63136ff7defa0cae629d4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 72400, hash: 'aeebb9966be3487cba8e15dbc89f0a6e56f5dceab2ea4abc6357cb40bfe7026e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 34421, hash: '3ec73d096569e915f257ba154a929698b08673fb3fa07f9ff2f3c57be7f555ae', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 126800, hash: 'b3ccbd1f0dd4b4d257e73abb43c42d72a60a284557221cb89911ec085f2fb688', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 46018, hash: '59cdf739c11a6cde80490bb5bd424549a8955bbc90573522612004405e18d9bb', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'book-appointment/index.html': {size: 40218, hash: '8d5fa8d56dfa6f8df26143904b5109de7c9e73814bf2fce3e868accff69b73f2', text: () => import('./assets-chunks/book-appointment_index_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 40765, hash: '7b339cc3a7a35781eb0089f0878b82e19553c9087ba95fc5611628672d75cf36', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 37009, hash: 'ed0bd1dcd9cc156e4ee75d374b9449727370fe5c4de9c86031a1277bfa40d191', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'offer/index.html': {size: 81417, hash: '9b75bc16d941b07ebcc584b1fcacf4eb7d870e56a873ce9ac31c7ec61163dc4c', text: () => import('./assets-chunks/offer_index_html.mjs').then(m => m.default)},
    'offer-ar/index.html': {size: 77365, hash: 'c87f0f99623e1589431888a2aa0f638272898aadc9d55ce254d0f7ad1df8f3c7', text: () => import('./assets-chunks/offer-ar_index_html.mjs').then(m => m.default)},
    'thanks/index.html': {size: 13009, hash: '3f0e6474dcaa6b45c7d5fa839574a70d2f8f9e6694d731b2412fc18f411679b4', text: () => import('./assets-chunks/thanks_index_html.mjs').then(m => m.default)},
    'thank-you/index.html': {size: 13026, hash: '4ff3aa1f1af792ec2ae9def23e42da4a39c769ec27b1cb318113855966e3a8e0', text: () => import('./assets-chunks/thank-you_index_html.mjs').then(m => m.default)},
    'confirmation/index.html': {size: 23055, hash: '20be021c707e74a952eac7dca11233c91c7d53926f9cb7581475159953b8ac85', text: () => import('./assets-chunks/confirmation_index_html.mjs').then(m => m.default)},
    'blog/1/index.html': {size: 30399, hash: '6f7ac8193c232ccb6c6cbdf32dcd67c798d7f8927baae8c1969d27ffc2a31bd8', text: () => import('./assets-chunks/blog_1_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 130742, hash: '856750ec9c5d2e8eeac261d588b7a6b17083f7c3c2b738472da6675e57a81c22', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-2TUB5JIZ.css': {size: 390820, hash: 'WuRldjFGIO0', text: () => import('./assets-chunks/styles-2TUB5JIZ_css.mjs').then(m => m.default)}
  },
};
