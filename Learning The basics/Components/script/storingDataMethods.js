// This will be saved in the same place in memory in all insances of this component
// TODO This could be used as data to share globally
const data = {
    status: 'Critical'
};

Vue.component('my-cmp', {
    data: function () { 
        // ! Using the "return data", will just return the data obj. literals above 
        // return data; 
        return { // TODO Using this way will only return and change on one of the instances
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} <button v-on:click="changeStatus">Change</button></p>',
    methods: {
        // ! This will be an issue, because it both of the changeStatus will be changed simoultanously. 
        // ! Better to seperate the data and isolate (locally) it inself, instead of using it as a globally
        changeStatus: function() {
            this.status = "Gotcha Changy";
        }
    }
});

new Vue({
    el: '#app',
});