<template>
  <div id="app">
    <ExampleComp msg="thisis an app"/>
    <router-view></router-view>
  </div>

</template>

<script>
import ExampleComp from './components/ExampleComp.vue'

export default {
  name: 'App',
  components: {
    ExampleComp,
  },
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
