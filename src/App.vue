<template>
  <div id="app">
    <h1>ToDo App!</h1>
    <TaskInput></TaskInput>
    
  </div>
</template>

<script>
import TaskInput from './components/TaskInput'


export default {
  name: 'app',
  components: {
    TaskInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
