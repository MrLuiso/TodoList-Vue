<template>
    <div class="taskInput">
        <input placeholder="Input your task"
                :value="newTodo"
                @change="getTodo"
                type="text">
        <b-button @click="addTodo" >Add Task</b-button>
    </div>
</template>

<script>
export default {
    name: 'TaskInput',
    methods: {
        getTodo(e){
            this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo(){
            this.$store.dispatch('addTodo')
            this.$store.dispatch('clearTodo')
        }
    },
    computed: {
        newTodo(){
            return this.$store.getters.newTodo
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
