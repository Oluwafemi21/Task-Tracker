<template>
  <li @dblclick="$emit('toggle-completed', task.id)" :class="task.completed ? 'completed' : '' ">{{ task.text }} <span @click="onDelete()">x</span></li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: Object,
  },
  methods:{
      onDelete(id){
          this.$emit('delete-task',id)
      }
  }
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  list-style-type: none;
  padding: 20px 10px;
  margin-bottom: 5px;
  background-color: rgba(225, 225, 225, 0.4);
}

.completed{
    border-left: 5px solid green;
}

li:hover {
  background-color: rgba(225, 225, 225, 0.8);
}

li span {
  font-size: 20px;
  font-weight: bold;
  color: firebrick;
}
</style>