<template>
  <div class="hello">
    <router-link to="/staticDataManagement"> Static Data Management</router-link>
  </div>
</template>

<script>
export default {

  name: 'ExampleComp',
  props: {
    msg: String
  },

  computed: {
    username() {
      // We will see what `params` is shortly
      // console.log(this.$route.params);
      // console.log("username", this.$route.params.username);
      return "wang";
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    usernameMethod() {
      // We will see what `params` is shortly
      if (this.$route.params) {
        console.log(this.$route.params);
        console.log(this.$route.params.username);
        return this.$route.params.username
      } else {
        return "NULL";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
