<template>
    <div class="taskColumn">
        <task-uncheked taskTitle="Title of Task"></task-uncheked>
    </div>
</template>

<script>
import TaskUncheked from './TaskUnchecked'

export default {
    name: "TaskColumn",
    components: {
        TaskUncheked
    }
}
</script>

<style>
.taskColumn{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-content: center;
    width: 33%;
}
</style>
