<template>
    <div class="taskDisplay">
        <task-column columnTitle="ToDo Tasks"></task-column>
        <task-column columnTitle="Completed Tasks"></task-column>
    </div>
</template>

<script>
import TaskColumn from './TaskColumn'

export default {
    name: 'TaskDisplay',
    components: {
        TaskColumn
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
