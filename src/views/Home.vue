<template>
    <add-task v-show="showAddTask"  @add-task="addTask" />
    <task-tracker @toggle-completed="toggleCompleted" @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>
import AddTask from '../components/AddTask.vue'
import TaskTracker from '../components/TaskTracker.vue'

export default {
    name:'HomePage',
    props:{
      showAddTask: Boolean
    },
    components:{
        'add-task': AddTask,
        'task-tracker': TaskTracker,
    },
    data(){
        return{
            tasks: []
        }
    },
    methods:{
    async deleteTask(id){
      
      //Filters the task by displaying tasks that the id is not equal to the task clicked on
      if(confirm('Do you want to delete the task?')){
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      })
        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : console.log("error")
      }
    },
    async toggleCompleted(id){
      const toggleTask = await this.fetchTask(id)
      const updateTask = await {...toggleTask, completed: !toggleTask.completed}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(updateTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? {...task, completed: data.completed} : task )
    },
    async addTask(task){
      const res = await fetch('http://localhost:5000/tasks',{
        method: 'POST',
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async fetchTask(id){
      const res =  await fetch(`http://localhost:5000/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },
  //LifeCycle Hooks
  async created (){
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();

    this.tasks = data
  }
}
</script>

<style>

</style>