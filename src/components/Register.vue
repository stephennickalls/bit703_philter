<template>
  <div class="container">
    <!-- Success or failure message -->
    <div class="row" v-if="errorMessage">
            <div class="alert alert-danger"><p>{{ errorMessage }}</p></div>
        </div>
        <div class="row" v-if="successMessage">
            <div class="alert alert-success"><p>{{ successMessage }}</p></div>
        </div>
    <div class="row">
      <form
        id="registration-form"
        data-request="addUser"
        method="post"
        action="users/add"
        accept-charset="UTF8"
        class="col col-sm-8 col-md-8"
        enctype="multipart/form-data"
        @submit.prevent="RegisterUser"
      >
        <!-- Form fields -->
        <div class="form-group">
          <label>Name</label>
          <input type="text" id="name" name="name" class="form-control"  />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="email" name="email" class="form-control"  />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" id="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password confirmation</label>
          <input type="password" id="confirmPassword" name="password-confirmation" class="form-control" />
        </div>
        <input
          type="submit"
          class="btn btn-primary"
          name="submit"
          value="Register"
        />
        <input type="hidden" name="_handler" value="register" />
      </form>
    </div>
    <div class="row">
      <p> </p>
      <p> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
  // data () {
  //   return {
  //     apiRequest: new this.$request({
  //       name: '',
  //       email: '',
  //       password: '',
  //       password_confirmation: ''
  //     }),
  //     errorMessage: '',
  //     successMessage: ''
  //   }
  // },
  // methods: {
  //   RegisterUser () {
  //     this.apiRequest.addStore(this.$store)
  //     this.apiRequest.post('users/add')
  //       .then((response) => {
  //         this.successMessage = response
  //         this.errorMessage = ''
  //       })
  //       .catch((errors) => {
  //         this.errorMessage = errors
  //         this.successMessage = ''
  //       })
  //   }
  // }
}
</script>
