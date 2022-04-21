<template>
  <div class="container">
    <track-header @toggle-view="showAdd()" :showAddTask='showAddTask' title="Task Tracker"/>
    <router-view :showAddTask='showAddTask'></router-view>
    <task-footer/>
  </div>
</template>

<script>

import TrackHeader from './components/TrackHeader.vue'
import TaskFooter from './components/TaskFooter.vue'

export default {
  name: 'App',
  components:{
    'track-header':TrackHeader,
    'task-footer': TaskFooter
  },
  data(){
    return{
      showAddTask: false
    }
  },
  methods:{
    showAdd(){
      this.showAddTask = !this.showAddTask
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
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Poppins', sans-serif;
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
  color:white;
}

button:hover{
  opacity: 0.8;
}
</style>
