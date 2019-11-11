var Link = {
    init: function(event) {
        this.el = event.currentTarget;
    },
    // attributeFilter: ['is'],
    onclick:  function(event) { alert(1) },
    onconnected:  function(event) { console.log(0) },
}


wickedElements.define('[is=smm-link]', Link)


var html = {
    init: function(event) {
        this.el = event.currentTarget;
        console.log('init', this.el)
        this.render()
    },
    attributeFilter: ['data-speclate-page'],
    onattributechanged(event) {
        const {attributeName, oldValue, newValue} = event;
        console.log(attributeName, oldValue, newValue);
        this.render()
    },
    render: () => { console.log('in render'); },
    onconnected:  function(event) { console.log(000) },
}


wickedElements.define('html', html)