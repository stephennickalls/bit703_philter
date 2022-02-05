<template>
    <div>
        <div class="container-fliud">
            <nav id="menu" class="navbar navbar-expand-md navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navbar">
                    <h1><a class="navbar-brand" href="#">Welcome To Philter</a></h1>
                    <ul class="navbar-nav ms-md-auto">
                            <router-link class="list__item" tag="li" to="/">
                            <a>Home</a>
                            </router-link>
                            <router-link class="list__item" tag="li" to="/image">
                            <a>Images</a>
                            </router-link>
                             <router-link class="list__item" tag="li" to="/account">
                            <a>Register</a>
                            </router-link>
                            <router-link class="list__item" tag="li" to="/account">
                            <a class="btn btn-primary">Login</a>
                            </router-link>
                        <li class="btn btn-outline-light list__item" ><a href="#" v-on:click.prevent="logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'logout',
  computed: {
    user () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
