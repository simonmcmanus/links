---
tags: 
title: Enable PHP error reporting for a page. 
date: Sat, 15 Sep 2007 09:59:25 +0000
---
This code is really handy although not that easy to find on google. It lets you enable errors on a php page without having to mess around in the php.ini file.  
error\_reporting("E\_ALL");  
ini\_set("display\_errors", "1");
