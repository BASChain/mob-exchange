<template>
  <div id="app">
    <router-view/>
    <div class="spin">
      <Spin v-if='LOADING' size="large"></Spin>
      <!-- <Spin size="large"></Spin> -->
    </div>
  </div>
</template>

<script>
import store from './store'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState([
      'LOADING'
    ])
  },
  name: 'App',
  store
}
</script>

<style>
.spin {
  display: flex;
  position: relative;
  margin-left: 47%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: white;
}
</style>
