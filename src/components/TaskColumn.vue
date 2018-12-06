<template>
    <div class="taskColumn">
        <h2 class="title">{{columnTitle}}</h2>
        <task-uncheked taskTitle="Title of Task" buttonText="Delete"></task-uncheked>
        <task-uncheked taskTitle="Title of Task" buttonText="Delete"></task-uncheked>
        <task-uncheked taskTitle="Title of Task" buttonText="Delete"></task-uncheked>
        <task-uncheked taskTitle="Title of Task" buttonText="Delete"></task-uncheked>
    </div>
</template>

<script>
import TaskUncheked from './TaskUnchecked'

export default {
    name: "TaskColumn",
    components: {
        TaskUncheked
    },
    props:['columnTitle']
}
</script>

<style scoped>
.taskColumn{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-content: center;
    width: 33%;
}

.title{
    background-color: indianred;
    color: white;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
</style>
