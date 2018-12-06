<template>
    <div class="taskInput">
        <b-input-group size="lg" class="inputGroup">
            <b-form-input placeholder="Input your task"  
                        v-model="taskTitle"
                        type="text">
            </b-form-input>
            <b-input-group-append>
                <b-button @click="displayText" variant="outline-success">Add Task</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    name: 'TaskInput',
    methods: {
        displayText: function(event) {
            alert(this.$data.taskTitle)
        }
    },
    data() {
        return {
            taskTitle: ''
        }
    }
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
