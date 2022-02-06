<template>
  <div class="row" v-if="othersImages">
      <div class="col" v-if="errors">
        <div class="alert alert-danger">{{ errors }}</div>
      </div>

      <div id="others-images" class="card-grid">
          <div class="card card-image" v-bind:key="image.id" v-for="image in othersImages">
              <picture v-bind:id="'image' + image.id">
                    <img v-bind:src="image.image.path"  v-bind:alt="image.description" />
                  </picture>
              <div class="card__content">
                <h5 class="card__header">{{ image.name }}</h5>
                <p class="card-description" >{{ image.description }}</p>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'othersImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      othersImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.othersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
