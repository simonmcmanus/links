var serviceWorker = require('speclate-service-worker')
var offlineSpec = require('../offline-spec')
var version = '2.2'

serviceWorker(offlineSpec, version)
