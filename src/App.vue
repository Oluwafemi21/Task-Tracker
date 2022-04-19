<template>
  <div class="container">
    <track-header title="Task Tracker"/>
    <task-tracker @toggle-completed="toggleCompleted" @delete-task="deleteTask" :tasks="tasks"/>
    <task-footer/>
  </div>
</template>

<script>
import TaskFooter from './components/TaskFooter.vue'
import TaskTracker from './components/TaskTracker.vue'
import TrackHeader from './components/TrackHeader.vue'


export default {
  name: 'App',
  components:{
    'track-header':TrackHeader,
    'task-tracker': TaskTracker,
    'task-footer': TaskFooter
  },
  data(){
    return{
      tasks:[]
    }
  },
  methods:{
    deleteTask(id){
      //Filters the task by displaying tasks that the id is not equal to the task clicked on
      if(confirm('Do you want to delete the task?')){
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    },
    toggleCompleted(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task )
    }
  },
  created (){
    this.tasks = [
        { id: 1, text: "Wash the dishes", completed: true},
        { id: 2, text: "Spread the clothes", completed: true},
        { id: 3, text: "Iron the clothes", completed: false },
        { id: 4, text: "Watch Real Madrid", completed: false },
      ]
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
  margin-inline: auto;
  width: 80%;
}

.container{
  margin-inline: auto;
  max-width: 500px;
  border: 2px solid slategray;
  border-radius: 6px;
  padding: 20px;
}

button{
  cursor: pointer;
  border:none;
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: 600;
  border: 2px solid transparent;
}

button:hover{
  opacity: 0.8;
}
</style>
