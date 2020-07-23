// Import stylesheets

import Vue from 'vue';
import { BButton } from 'bootstrap-vue';
import {BootstrapVue } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { MyTable } from './myTable';
Vue.use(ModalPlugin)
Vue.use(BootstrapVue)


import './style.css';

Vue.component('b-button', BButton)

const vue = new Vue({
  el: '#app',
  data: {
    title: `Vue JS Template!`
  },
  components: { MyTable },
  template:`<div>
    <MyTable />
</div>`
});
