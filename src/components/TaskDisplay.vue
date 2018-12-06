<template>
    <div class="taskDisplay">
        <uncompleted-task-column columnTitle="ToDo Tasks"></uncompleted-task-column>
        <completed-task-column columnTitle="Completed Tasks"></completed-task-column>
    </div>
</template>

<script>
import UncompletedTaskColumn from './UncompletedTaskColumn'
import CompletedTaskColumn from './CompletedTaskColumn'

export default {
    name: 'TaskDisplay',
    components: {
        UncompletedTaskColumn,
        CompletedTaskColumn
    }
}
</script>

<style scoped>
.taskDisplay{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
}
</style>
