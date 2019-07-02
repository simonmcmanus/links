---
tags: chunk data
title: HTTP requests with Node.js
date: Wed, 11 Apr 2012 12:21:33 +0000
---
I couldn't find this code anywhere on the internets yesterday, posting here for my own convenience.
```js
 `var options = {
   host: 'api.twitter.com',
   port: 80,
   path: '/path',
   method: 'GET',
   encoding: 'utf8'
 };


 http.get({ host: options.host, path: options.path }, function(res2){
	var data = [];
	res2.on('data', function(chunk) { 
		data.push(chunk); 
	});


	res2.on('end', function() { // wait for the request to finish
		res.json(data.join('')); 
	})
});` 

```
