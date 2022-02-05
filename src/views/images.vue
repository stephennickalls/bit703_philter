<template>
  <div id="main">
      <!-- Our UserImages component will go here -->
            <div id="images" class="container">
              <UsersImages />
        <div class="row">
            <h2>Latest Images</h2>
        </div>
        <!-- Our OthersImages component will go here -->
        <OthersImages />
      </div>
  </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue'
import UsersImages from '@/components/UsersImages.vue'
export default {
  name: 'images',
  components: {
    OthersImages,
    UsersImages
  }
}
</script>
