<template>
  <main>
    <ul v-for="task in tasks" :key="task.id">
      <task-item @toggle-completed="$emit('toggle-completed', task.id)" @delete-task="this.$emit('delete-task',task.id)" :task="task"/>
    </ul>
  </main>
</template>

<script>

import TaskItem from './Task.vue';

export default {
  name: "TaskTracker",
  props:{
      tasks: Array
  },
  components:{
      'task-item':TaskItem
  },
  //this tells vue what function we are emitting
  emits:['delete-task','toggle-completed']
};
</script>

<style scoped>
main{
  margin-block: 25px;
}
</style>

