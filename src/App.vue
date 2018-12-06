<template>
  <div id="app">
    <h1>ToDo App!</h1>
    <task-input></task-input>
    <task-display></task-display>
  </div>
</template>

<script>
import TaskInput from './components/TaskInput'
import TaskDisplay from './components/TaskDisplay'

export default {
  name: 'app',
  components: {
    TaskInput,
    TaskDisplay
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
