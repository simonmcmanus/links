

var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')
var analytics = require('ga-browser')(window)

window.Raven = require('raven-js');
var consolePlugin = require('raven-js/plugins/console');

Raven.config('https://70b5edd3041d40659e92ae57e9e9808b@sentry.io/156588').install()
consolePlugin(Raven, console, {});

if(history.pushState) {

    analytics('send', 'event', 'history-push-state')
    window.$ = require('jquery')

    router({
        after: function (error,  markup, page) {
            var scrollTo = 0;
            $('html,body').scrollTop(scrollTo)

            analytics('send', 'pageview', {
                page: window.location.pathname,
                title: document.title
            })

        },
        error: function (err, $container) {
            if (err) {
                $container.html('<div class="markdown"><h3>Error</h3><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>')
                console.error(err)
                analytics('send', 'exception', {
                    exDescription: err.message
                })
            }
        }
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            analytics('send', 'event', 'service-worker-started')
        }).catch(function (err) {
            analytics('send', 'event', 'service-worker-register-failed')
            console.error(err)
        })
    } else {
        appCacheNanny.start()
        analytics('send', 'event', 'app-cache-nanny-started')
    }

    appCacheNanny.on('updateready', function () {
        location.reload()
        analytics('send', 'event', 'app-cache-nanny-reload')
    })
} else {
    analytics('send', 'event', 'no-history-push-state')
 }

analytics('create', 'UA-40911437-2', 'auto')
analytics('send', 'pageview')
