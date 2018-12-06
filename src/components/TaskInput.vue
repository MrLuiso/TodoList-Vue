<template>
    <div class="taskInput">
        <b-input-group size="lg" class="inputGroup">
            <b-form-input></b-form-input>
            <b-input-group-append>
                <b-btn variant="outline-success">Add Task</b-btn>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    name: 'TaskInput'
}
</script>

<style scoped>
.taskInput{
    display: flex;
    flex: 1;
    justify-content: center;
}

.inputGroup{
    width: 50%;
}
</style>
