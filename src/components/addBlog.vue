<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form id="add-blog" class="col-md-6">

      <div class="form-group">
        <label>Blog Title</label>
        <input type="text" class="form-control" v-model.lazy="blog.title">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Blog Content</label>
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
      

      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }} </p>
        <p>Categories:</p>
        <ul >
          <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
      </div>

      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: []
      }
      
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}


</style>
