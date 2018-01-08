<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlog from './components/showBlog';
import header from './components/header';
import singleBlog from './components/singleBlog';



export default {
   components: {
    'add-Blog': addBlog,
    'show-blog' : showBlog,
    'app-header': header,
    'single-blog': singleBlog

  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>


</style>
