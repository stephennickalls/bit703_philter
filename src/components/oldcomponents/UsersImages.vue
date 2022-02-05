<template>
  <div class="container">
    <div class="row">
      <h2>Your Images</h2>
      <p>
        <a class="btn btn-primary text-center float-right" href="#/image/add"
          >Upload an Image Now</a
        >
      </p>
    </div>

    <!-- start vue if -->
    <!-- if tags -->
    <div class="row" v-if="usersImages">
      <!-- for tags -->
      <h3>hello</h3>
      <p class="tags" v-for="tag in images.tags" v-bind:key="tag">
        Tags:
        <a v-bind:href="'image/tag/' + tag" class="btn btn-primary btn-sm"
          >{{ tag }} ({{ count }})</a
        >
        <!-- end tags for -->
      </p>
      <!-- end vue if -->
      <div id="my-images" class="grid">
        <!-- for each image -->
        <div class="grid-item user" v-bind:key="image.id" v-for="image in usersImages">
              <picture v-bind:id="'image' + image.id">
                  <img v-bind:src="image.image.path"  v-bind:alt="image.description"/>
                  <!-- <img src=""  v-bind:alt="image.description"/> -->
              </picture>
              <h5>{{ image.name }}</h5>
              <p>{{ image.description }}</p>
          <p>
            <a
              v-bind:href="'/image?delete_image=' + image.id"
              class="btn btn-primary btn-sm"
              >Delete</a
            >
          </p>
        </div>
        <!-- end for each image  -->
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usersImages',
  methods: {
    fetchImages () {
      const endpoint = 'images/user'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.usersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }

}
</script>
