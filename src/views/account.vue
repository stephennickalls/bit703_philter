<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2>User Login/Registration</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 pl-0">
          Login in for should go here
          <!-- Our Login component will go here -->
              <Login />
        </div>
        <div class="col-md-6 pr-0">
          <!-- Our Register component will go here -->
              <Register />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'account',
  components: {
    Login,
    Register
  }
}

</script>
