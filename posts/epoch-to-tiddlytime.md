---
tags: osmososft,TiddlyWiki ccTiddly
title: Epoch to TiddlyTime 
date: Mon, 03 Dec 2007 11:58:16 +0000
---
This handy PHP function receives  a epoch time stamp and returns the a string using the TiddlyWiki date format.   Quite handy.  
  
//  Returns time in TiddlyWiki format from Epoch time stamp.  
function epochToTiddlyTime($timestamp)  
{  
return date('YmdHi', $timestamp);  
}
