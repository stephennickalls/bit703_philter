<template>
  <div class="row" v-if="usersImages">
      <div class="col" v-if="errors">
        <div class="alert alert-danger">{{ errors }}</div>
      </div>
            <div class="row">
              <h2>Your Images</h2>
                <p>
                  <a class="btn btn-primary text-center float-right" href="#/image/add"
                    >Upload an Image Now</a
                  >
                </p>
            </div>
            <div id="users-images" class="card-columns">
                <div class="card other" v-bind:key="image.id" v-for="image in usersImages">
                    <picture v-bind:id="'image' + image.id">
                        <img v-bind:src="image.image.path"  v-bind:alt="image.description"/>
                        <!-- <img src=""  v-bind:alt="image.description"/> -->
                    </picture>
                    <h5>{{ image.name }}</h5>
                    <p>{{ image.description }}</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'usersImages',
  data () {
      return
    },
  mounted () {
    console.log('test');
    console.log(store.getters.getToken)
    Axios.get(`http://localhost/bit703/module6/api/v1/users`).then(response => {
      console.log(response)
    })
  }

}

</script>
