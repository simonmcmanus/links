(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-40911437-2', 'auto');
  ga('send', 'pageview');


var router = require('../node_modules/speclate/router/index.js')
var appCacheNanny = require('appcache-nanny')

window.Raven = require('raven-js');
var consolePlugin = require('raven-js/plugins/console');

Raven.config('https://70b5edd3041d40659e92ae57e9e9808b@sentry.io/156588').install()
consolePlugin(Raven, console, {});

if(history.pushState) {
    ga('send', 'event', 'history-push-state')
    router({
        preFetch: function($container) {
            $container.innerHTML = ''
        },
        after: function (error,  markup, page) {
            var scrollTo = 0;
//            $('html,body').scrollTop(scrollTo)

            ga('send', 'pageview', {
                page: window.location.pathname,
                title: document.title
            })

        },
        error: function (err, $container) {
                
            if (err) {
                $container.innerHTML = '<div class="markdown"><h3>Error</h3><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>'
                console.error(err)
                ga('send', 'exception', {
                    exDescription: err.message
                })
            }
        }
    })


    // if ('serviceWorker' in navigator) {


    //     var dogs = new Worker('lists/dogs.js')

    //     var cats = dogs.postMessage(['hello', 'chaps'])

    //     console.log('cats', cats)

    //     dogs.onmessage = function(e) {
    //         console.log('Message received from worker', e.data);
    //     }

    //     console.log('register sw111', dogs)
    //     navigator.serviceWorker.register('/service-worker-test.js').then(function (registration) {
              
    //         ga('send', 'event', 'service-worker-started')
    //     }).catch(function (err) {
    //         ga('send', 'event', 'service-worker-register-failed')
    //         console.error(err)
    //     })
    // } else {
    //     appCacheNanny.start()
    //     ga('send', 'event', 'app-cache-nanny-started')
    // }

    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    //         console.log('register sw1')
    //         ga('send', 'event', 'service-worker-started')
    //     }).catch(function (err) {
    //         ga('send', 'event', 'service-worker-register-failed')
    //         console.error(err)
    //     })
    // } else {
    //     appCacheNanny.start()
    //     ga('send', 'event', 'app-cache-nanny-started')
    // }

    // appCacheNanny.on('updateready', function () {
    //     location.reload()
    //     ga('send', 'event', 'app-cache-nanny-reload')
    // })
} else {
    analytics('send', 'event', 'no-history-push-state')
 }

ga('create', 'UA-40911437-2', 'auto')
ga('send', 'pageview')
