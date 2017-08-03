let url = require('url');
let adr = "https://127.0.0.1/html5/nodejs/url?name=dongbc&pwd=123123#top";

let data = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: '127.0.0.1',
  port: null,
  hostname: '127.0.0.1',
  hash: '#top',
  search: '?name=dongbc&pwd=123123',
  query: 'name=dongbc&pwd=123123',
  pathname: '/html5/nodejs/url',
  path: '/html5/nodejs/url?name=dongbc&pwd=123123',
  href: 'https://127.0.0.1/html5/nodejs/url?name=dongbc&pwd=123123#top' };

console.log(url.parse(adr));
console.log(url.format(data));
console.log(url.resolve("https://","www.baidu.com"));