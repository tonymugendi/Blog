<template>
  <div>
    <!-- <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->
    <form-helper>
      <h2 slot="title">I am the slot title</h2>
      <p slot="text">I am the paragraph</p>
    </form-helper>
    
  </div>
</template>

<script>
// import Header from './components/Header';
// import Ninjas from './components/Ninjas';
// import Footer from './components/Footer';
import formHelper from './components/formHelper';

export default {
  components: {

    // 'app-header': Header,
    // 'app-ninjas': Ninjas,
    // 'app-footer': Footer
    'form-helper': formHelper

    
  },
  data() {
    return {
      // ninjas: [
      //           {name: 'Ryu', speciality: 'Vue Components', show: false},
      //           {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
      //           {name: 'Hitoshi', speciality: 'Click Events', show: false},
      //           {name: 'Tango', speciality: 'Conditionals', show: false},
      //           {name: 'Kami', speciality: 'Webpack', show: false},
      //           {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      //       ],
      // title: 'Vue Ninjas'
      
    }
  }
}
</script>

<style scoped>


</style>
