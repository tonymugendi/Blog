<template>
  <div id="show-blogs" class="container">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h4>{{ blog.title }}</h4>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      blogs: []
      
    }
  },

  method: {


  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0, 10);
    })
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}


</style>
