---
tags: API,BT,Facebook API,Phones,PHP,SDK,Web21C
title: Phones and Facebook
date: Thu, 19 Jul 2007 10:35:41 +0000
---
This is what my Facebook application for the [BT SDK](http://sdk.bt.com/ "BT SDK") currently looks like,  

[![callmeo_facebook.gif](https://simonmcmanus.files.wordpress.com/2007/07/callmeo_facebook.gif)](https://simonmcmanus.files.wordpress.com/2007/07/callmeo_facebook.gif "callmeo_facebook.gif")

  

Unfortunately you can not install this application yourself yet because the payment method/model have still not been confirmed.  

  
 Yesterday I tinkered slightly, the variables are all now posted (as opposed to being passed in the url) to the SDK file and I added the Text Me functionality.  
  
 As I played some nifty functionality presented itself :  

  
*    Call Me button with no number entry, facebook knows the phone number of most users, if the user viewing a page and the person whos page they are  viewing have their number stored in facebook meaning we could present a button to the viewer that lets them talk over the phone from one button click. 
  
*   Currently any text sent from the Text Me boxes are recieved from "Facebook".  It would be nice to pass the username of the person sending the text so that the sending user can be identified from the message.
  

  
The code for the default FBML is below (replacing YOURURL):  
```js
<form action="[http://YOURURL/facebook/phpWeb21C/examples/cmds/makeCall.php](http://yoururl/facebook/phpWeb21C/examples/cmds/makeCall.php)" method="get">
```
  
```js
<br />
```
  
```js
<input type="text" name="tel" />
```
  
```js
<br />
```
  
```js
<input type="SUBMIT" name="SUBMIT"  value="Call Me"/>
```
  
```js
<br />
```
  
```js
</form>
```
  
```js
<p><br />
```
  
```js
<form action="[http://YOURURL/facebook/phpWeb21C/examples/cmds/sendSMS.php](http://www.yourproblemshared.com/facebook/phpWeb21C/examples/cmds/sendSMS.php)" method="post">
```
  
```js
<br />
```
  
```js
<textarea name="text" rows="8" cols="24"></textarea>
```
  
```js
<br />
```
  
```js
<input type="SUBMIT" name="SUBMIT"  value="Text Me"/>
```
  
```js
</form></p>
```
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
