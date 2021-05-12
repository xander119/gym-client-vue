<template>
  <div id="app">
    <ExampleComp msg="thisis an app"/>
    <div>

      <router-link to="/staticDataManagement"> Static Data Management</router-link>
      <div>
        <router-link to="/fodddo/example">fodddo</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
// import ExampleComp from './components/ExampleComp.vue'

export default {
  name: 'App',

  methods: {
    dsd(){
      console.log('exanoke')
    }
  },
  data() {
    return {}
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
