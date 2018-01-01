<template>
  <div>
    <show-blog></show-blog>
    
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlog from './components/showBlog';


export default {
   components: {
    'add-Blog': addBlog,
    'show-blog' : showBlog

  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>


</style>
