new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        errorMsg: 'Not found' 
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    methods: {
        showLog: function() {
            return this.divClasses;
        }
    }
    
});