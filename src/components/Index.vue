<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div v-for="category in categories" class="col-md-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ category.name }}</h5>
              <div class="row">
                <div class="col-md-6" v-for="subCategory in category.subCategories">
                  <p>{{ subCategory.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
