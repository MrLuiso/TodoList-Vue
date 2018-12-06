<template>
    <div class="taskDisplay">
        <task-column></task-column>
        <task-column></task-column>
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

<style>
.taskDisplay{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
}
</style>
