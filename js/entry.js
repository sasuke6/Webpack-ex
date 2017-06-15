require('./module-one.js');
require('./module-two.js');


import Vue from 'vue';

Vue.component('Heading', require('./components/heading.vue'));

new Vue({
    el: '#app'
})

require('../css/style.css');