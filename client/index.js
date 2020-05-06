import { client } from 'speclate'
import { define } from  'wicked-elements'
import requireLists from '/client/speclate-required.js'


const clientOptions = {
    preFetch: function ($container) {
    $container.innerHTML = ''
    },
    after: function (error, markup, page) {
    var scrollTo = 0

    // ga('send', 'pageview', {
    //     page: window.location.pathname,
    //     title: document.title
    // })
    },
    error: function (err, $container) {
    if (err) {
        $container.innerHTML = '<div class="markdown"><h3>Error</h3><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>'
        console.error(err)
        // ga('send', 'exception', {
        // exDescription: err.message
        // })
    }
    }
};
var speclate = client(clientOptions, {}, requireLists)
var siteURL = "http://" + top.location.host.toString();
const internalLinkSelector = "a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']"
// we could just check these against the spec. 
define(internalLinkSelector, { onclick: speclate.clickHandler })