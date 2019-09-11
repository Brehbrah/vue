// This will be saved in the same place in memory in all insances of this component
// TODO This could be used as data to share globally
const data = {
    status: 'Critical'
};

// TODO Here will be stored 'Globally'
Vue.component('my-cmp',{
    // * Add Objects
})

// TODO here will be stored in as a variable and it will be 'locally'
var cmp = {
    data: function () {
        return { 
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} <button v-on:click="changeStatus">Change</button></p>',
    methods: {
        changeStatus: function () {
            this.status = "Gotcha Changy";
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'my-cmp': cmp
    }
});

new Vue({
    el: '#app2',
});