<template>
    <div class="taskUnchecked">
        <h3>{{taskTitle}}</h3>
    </div>    
</template>

<script>
export default {
    name: 'TaskUnchecked',
    props: ['taskTitle']
}
</script>

<style scoped>
.taskUncheked{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    background-color: aqua;
}
</style>
