<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label>Task</label>
      <input type="text" name="text" v-model="text" placeholder="Add Task" />
    </div>
    <div class="form-control-check">
      <label for="checkbox">Set Reminder</label>
      <input type="checkbox" v-model="completed" name="checkbox" id="checkbox" />
    </div>
    <track-button text="Save Task" />
  </form>
</template>

<script>

import TrackButton from '../components/TrackButton.vue'

export default {
name:'AddTask',
components: {
    "track-button": TrackButton,
  },
  data(){
    return{
        text:'',
        completed:false
    }
  },
  methods:{
      onSubmit(){
        if(!this.text){
            alert('Please add a task')
            return
        }

        const newTask = {
            // id: Math.floor(Math.random() * 100000),
            text: this.text,
            completed: this.completed
        }

        this.$emit('add-task',newTask)

        this.text = ''
        this.completed = false
      }
  }
}
</script>

<style scoped>
form {
  padding-block: 20px;
  transition: all ease-in 0.25s;
}

.form-control,
.form-control-check {
  margin-block: 15px;
  display: flex;
}

.form-control {
  flex-direction: column;
  gap: 12px;
}

label,
input {
  width: 100%;
}

.form-control-check {
  flex-direction: row;
  align-items: center;
}

.form-control-check input,
.form-control-check label {
  cursor: pointer;
}

input[type="text"] {
  padding: 7px;
  border-radius: 4px;
  border: 1px solid slategray;
}

input[type="text"]:hover,
input[type="text"]:focus {
  outline: 2px solid green;
}
</style>