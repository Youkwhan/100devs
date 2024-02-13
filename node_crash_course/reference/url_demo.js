const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL (basically get the straight up url)
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain + post if available)
console.log(myUrl.host);

// Hostname (Does not grab port name :8000 or :5000)
console.log(myUrl.hostname);

// Pathname (the actual file)
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((val, name) => console.log(`${name}: ${val}`));
