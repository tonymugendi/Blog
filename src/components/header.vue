<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" exact>Blogs</router-link>
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link" exact>Add Blog</router-link>
            <!-- <a class="nav-link" href="#">Features</a> -->
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.router-link-active{
  background: #eee;
  color: #444;
}

</style>


