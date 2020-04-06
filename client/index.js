(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

ga('create', 'UA-40911437-2', 'auto')
ga('send', 'pageview')

var speclateClient = require('speclate/router')

var appCacheNanny = require('appcache-nanny')
const {define, get, upgrade, whenDefined} = require('wicked-elements');

const requireLists = require('./speclate-required-lists')

if(window.location.host === 'simonmcmanus.com') {
  window.Raven = require('raven-js')
  var consolePlugin = require('raven-js/plugins/console')
  
  Raven.config('https://70b5edd3041d40659e92ae57e9e9808b@sentry.io/156588').install()
  consolePlugin(Raven, console, {})  
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    console.info('ServiceWorker registration successful with scope: ', registration.scope)
  }).catch(function (err) {
    console.info('ServiceWorker registration failed: ', err)
  })
}



if (history.pushState) {
  ga('send', 'event', 'history-push-state')
  var speclate = speclateClient({
    preFetch: function ($container) {
      $container.innerHTML = ''
    },
    after: function (error, markup, page) {
      var scrollTo = 0

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
  }, {}, requireLists)
  define('a', { onclick: speclate.clickHandler })
} else {
  analytics('send', 'event', 'no-history-push-state')
}

ga('create', 'UA-40911437-2', 'auto')
ga('send', 'pageview')
