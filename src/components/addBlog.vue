<template>
  <div id="add-blog" class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted" id="add-blog">
          <div class="form-group">
            <label>Blog Title</label>
            <input type="text" class="form-control" v-model.lazy="blog.title">
          </div>
          <div class="form-group">
            <label >Blog Content</label>
            <textarea class="form-control" rows="3" v-model.lazy="blog.content"></textarea>
          </div>
          <div id="checkboxes">
            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input"  value="ninjas" v-model="blog.categories">
              <label class="form-check-label">Ninjas </label>
            </div>

            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input"  value="wizards" v-model="blog.categories">
              <label class="form-check-label"> Wizards </label>
            </div>

            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input"  value="mario" v-model="blog.categories">
              <label class="form-check-label"> Mario </label>
            </div>

            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input"  value="cheese" v-model="blog.categories">
              <label class="form-check-label">Cheese </label>
            </div>
          </div>

          <label class="my-1 mr-2" >Author</label>
          <select class="custom-select my-1 mr-sm-2" v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
          </select>
          <button type="submit" class="btn btn-primary mt-4" v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted" class="alert alert-success" role="alert">
          Your blog was posted succesfully
        </div>
      </div>

      <div class="col-md-6">
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }} </p>
            <p>Categories:</p>
            <ul >
              <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['The React Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false
      
    }
  },

  methods: {
    post: function() {
      this.$http.post('https://vue-blog-76ff9.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
        
      })
      
    }
  }
}
</script>

<style scoped>
/* #add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
*/
#preview{
    /* padding: 10px 20px; */
    border: 1px dotted #ccc;
    margin: 30px 0; 
} 


</style>
