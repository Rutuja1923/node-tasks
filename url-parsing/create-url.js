const url = require('url');

const myURL = new URL('https://www.example.com:8080/path/to/page?name=JohnDoe&age=25#section2');

console.log('Protocol:', myURL.protocol);
console.log('Host:', myURL.host); 
console.log('Hostname:', myURL.hostname);
console.log('Port:', myURL.port);
console.log('Pathname:', myURL.pathname);
console.log('Search Params:', myURL.searchParams);
console.log('Hash:', myURL.hash);


/*
Protocol: https:
Host: www.example.com:8080
Hostname: www.example.com
Port: 8080
Pathname: /path/to/page
Search Params: URLSearchParams { 'name' => 'JohnDoe', 'age' => '25' }
Hash: #section2
*/