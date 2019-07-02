---
tags: 
title: The most simple AJAX call in TiddlyWiki
date: Tue, 16 Oct 2007 14:10:33 +0000
---
When tagged system config this script loads the content of the .php file and displays it as an alert.  
```js
//{{{
```
  
```js
function callback(status,params,responseText,xhr)
  
 {
  
 alert(responseText);
  
 }
```
  
```js
var a = doHttp('GET', 'http://127.0.0.1/cctw\_tw/cctiddly/handle/index.php',null,null,null,null,callback);
```
  
```js
//}}}
```
