<template>
  <div v-theme="" id="show-blogs" class="container">
    <h1>All Blog Articles</h1>
    <div class="input-group mb-3">
      <input type="text" v-model="search" class="form-control" placeholder="Search blogs"  >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Search</button>
      </div>
    </div>

    <div v-for="blog in filteredBlogs" class="single-blog">
      <h4 v-rainbow>{{ blog.title | toUppercase}}</h4>
      <article>{{ blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  
  data() {
    return {
      blogs: [],
      search: ''
      
    }
  },

  method: {


  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0, 10);
    })
  },

  computed: {
    
  },

  filters: {
    toUppercase(value){
      return value.toUpperCase();
    },

    snippet(value){
      return value.slice(0,100) + '...';
    }
  },

  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);

      }
    }
  },

  mixins: [searchMixin]
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
