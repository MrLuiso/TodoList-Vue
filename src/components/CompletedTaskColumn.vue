<template>
    <div class="taskColumn">
        <h2 class="title">{{columnTitle}} ({{todos.length}})</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos" :key="todo.id">
                <h3 id="todoBody">{{todo.body}}</h3>
                <div class="btn-group">
                    <button type="button" @click="edit(todo)" class="btn-secundary btn-sm">
                        <span class="glyphicon glyphicon-edit"></span> Edit
                    </button>
                    <button type="button" @click="complete(todo)" class="btn-success btn-sm">
                        <span class="glyphicon glyphicon-ok-circle"></span> Not Done
                    </button>
                    <button type="button" @click="remove(todo)" class="btn-danger btn-sm">
                        <span class="glyphicon glyphicon-remove-circle"></span> Remove
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "CompletedTaskColumn",
    props:['columnTitle'],
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.completeTodos
        }
    }
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
#todoBody{
    display: flex;
    flex: 1;
    justify-self: center;
    align-content: center;
    justify-content: center;
    flex-direction: row;
}
button{
    margin-left: 5px;
    margin-right: 5px;
}
.btn-group{
    float: right;
}
.list-group-item{
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}
</style>
