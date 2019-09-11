new Vue({
    el: '#app',
    data: { // Data is not reactive, which means logical part such as ternary operators
        counter: 0,
        secondCounter: 0
    },
    computed: { 
        // ! Use this computed for caching. More optimized this way, so it will avoid run unncessary tasks
        // ! Computed properties always needs to run synchronously
        // Since data is not reactive, we can use computed to make logical parts instead.
        // It doesn't need to use the output() on the String interpolation, only output
        output: function() {
            console.log('Computer here!')
            return this.counter > 5 ? "Greater 5" : "Smaller than 5"; 
        }
    },
    watch: { // Watch is able to execute asynchronous task
        counter: function(value) {
            let vm = this; //this let us access the properties and needs to be stored in a variable
            setTimeout(function() {
                vm.counter = 0; // Will reset after two seconds
            }, 2000); 
        }
    },
    methods: {
        result: function () {
            console.log('Method here!')
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});