<template>
    <div class="container">
        <section id="layout-content">
            <div id="hero_wrapper">
                <div id="hero">
                    <div class="container-fluid">
                        <div class="row">
                        <p>Find something cool? Share it with our community.<br/> Look at other images as well</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <div id="others-images-home" class="container-fluid">
            <div class="row">
                <OthersImages />
            </div>
            </div>
    </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue'
export default {
  name: 'Home',
  components: {
    OthersImages
  }
}
</script>
