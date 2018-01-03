// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false

//Custom Directives
// Vue.directive('rainbow',{
// 	bind(el, binding, vnode){
// 		el.style.color = "#" + Math.random().toString().slice(2,8);

// 	}

// });

//Filters
// Vue.filter('to-uppercase', function(value){
// 	return value.toUpperCase();

// });

// Vue.filter('snippet', function(value){
// 	return value.slice(0,100) + '...';
// });






//export const bus = new Vue();


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
