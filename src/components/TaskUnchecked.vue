<template>
    <div class="taskUnchecked">
        <h3 id="tiitle">{{taskTitle}}</h3>
        <b-button>{{buttonText}}</b-button>
    </div>    
</template>

<script>
export default {
    name: 'TaskUnchecked',
    props: ['taskTitle', 'buttonText']
}
</script>

<style scoped>
.taskUnchecked{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
}

#title{
    display: flex;
}

#deleteButton{
    display: flex;
    justify-self: flex-end;
}
</style>
