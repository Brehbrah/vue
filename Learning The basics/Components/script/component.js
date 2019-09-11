Vue.component('my-cmp', {
    // ! This will not work intended, because the data obj. extends the Vue Instance and therefore setting the data
    // ! we kind of interfere with the other data properties, the other data obj. 
    /* data: { 
        status: 'Critical'
    }, */
    data: function() { // ! Doing this way will 'isolate' the component use, instead of extending the Vue Instance
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}</p>'
});

new Vue({
    el: '#app',
});