const url = require('url');


const sampleURL = 'https://www.youtube.com/results?search_query=mongodb+crash+course';

const parsedURL = url.parse(sampleURL,true);

console.log(parsedURL);


/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.youtube.com',
  port: null,
  hostname: 'www.youtube.com',
  hash: null,
  search: '?search_query=mongodb+crash+course',
  query: [Object: null prototype] { search_query: 'mongodb crash course' },
  pathname: '/results',
  path: '/results?search_query=mongodb+crash+course',
  href: 'https://www.youtube.com/results?search_query=mongodb+crash+course'
}
  */